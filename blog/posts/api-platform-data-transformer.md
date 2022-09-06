---
title: Using DTO and Data Transformer in Api Platform Project'
slug: api-platform-data-transformer
image: /imgs/blog/api/api.webp
description: Transform output and input DTO with Data Transformer in Api Platform
---
### Introduction
In this small article I will show how to use DTO and DataTransformer in <a href="https://api-platform.com" rel="noreferrer" class="btn btn-link" target="_blank">Api Platform</a>, for this I will use a very simple use case, we will create a user entity, and when a user wants to reset his password he should send his email to api and the api will send him an email containing a url to reset the password.

The complete source code is <a href="https://github.com/najmi9/apiplatform-dto-demo" rel="noreferrer" class="btn btn-link" target="_blank">Here</a>.

### Requirements:
- docker & docker-compose

### Setup the docker environment
I will use a simple docker-compose file to use the PHP 8.1 and a simple database container to test with.

First let us create a new directory <span class="badge bg-secondary">dto-demo</span> and move to it then create an a <strong>docker-compose.yaml</strong> file.

```bash
mkdir dto-demo
cd dto-demo
touch docker-compose.yaml
```
Copy this example of code to the <strong class="text-primary">docker-compose.yaml</strong> file:

```yaml
version: '3.9'

networks:
  dev:

services:
  php:
    restart: unless-stopped
    container_name: php-container
    networks:
      - dev
    build:
      context: './.docker/php'
      args:
        USER_ID: ${USER_ID}
        GROUP_ID: ${GROUP_ID}
    volumes:
      - './:/var/www:delegated'
    depends_on:
      - db
    ports:
      - 80:80 # Temporary port to test the api without installing a web server
    command: symfony serve --port 80 # Run the internal symfony php server

  db:
    image: 'mariadb:latest'
    environment:
        MYSQL_PASSWORD: 'root'
        MYSQL_ROOT_PASSWORD: 'root'
        MYSQL_DATABASE: app
    networks:
      - dev
    volumes:
        - db_data:/var/lib/mysql
    ports:
        - '3306:3306'

volumes:
  db_data:
```
I created a simple <b class="text-primary">Dockerfile</b> to build a php 8.1 image with a few common extensions, symfony cli and composer, I also created a user for the container to avoid the permission problems, copy that content of this file and move it to <mark>/.docker/php </mark> folder as mentioned in the context build of the php container.

```bash
mkdir -p .docker/php
cd .docker/php
touch Dockerfile
```

```dockerfile
FROM php:8.1-fpm

ARG USER_ID
ARG GROUP_ID

RUN apt-get update && apt-get install -y wget git

RUN apt-get update && apt-get install -y libzip-dev libicu-dev && docker-php-ext-install pdo zip intl opcache

RUN pecl install apcu && docker-php-ext-enable apcu

RUN docker-php-ext-install mysqli pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | bash
RUN apt-get install symfony-cli

WORKDIR /var/www

RUN groupadd -f --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user
USER user

EXPOSE 9000
```

Then you should build the docker containers and turn them up:

```bash
USER_ID=$(id -u) GROUP_ID=$(id -g) docker-compose build

docker-compose up -d
```

### Installation of Symfony project
First let us go inside the php container where we can use the symfony cli and composer to install some dependencies.

```bash
docker exec -it php-container bash

composer require symfony/webapp-pack #Install symfony webapp
composer require symfony/flex  #Install symfony flex to get the folder structure and the basic configuration
composer require symfony/runtime symfony/yaml symfony/dotenv
```

Add this lines to the <span class="text-warning">composer.json</span>:

```json
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "App\\Tests\\": "tests/"
        }
    },
```

And run the command:

```bash
composer dumpautoload
```

I use git to upload my code to github, so let's initialize a new repository.
```bash
composer init --name dto/demo --type project --author "username <email@gmail.com>" # click Enter to skip all questions
```

and run this commands to set the
<span class="badge bg-primary text-italic">DATABASE_URL</span> environment variable in the <b>.env.local</b> file and create the database:

```bash

echo DATABASE_URL="mysql://root:root@db:3306/app?serverVersion-8&charset=utf8mb4" > env.local
symfony console doctrine:database:create --if-not-exists
```

### Installation of Api Platform and create a User entity
Just with this command api platform bundle will be installed and configured:
```bash
composer require api
```
Let us create a new user with symfony maker component:

```bash
symfony console make:user #Less all the options by default

symfony console make:migration

symfony console doctrine:migrations:migrate
```
Cool, until now, we have a user table in our database with the columns email and password, now will make a post endpoint, when the user can send us his email to reset his password, and he should get the response of his information without showing the password, we can use symfony serialization groups, but today we will use DTOs.

![DataTransformers and DTO](/imgs/blog/api/shema.png)

the **UserResetPasswordInput** class contains the email that we will use to get the user, and after sending the email we will transform the user to an **UserResetPasswordOutput**.
This is like transforming the **UserResetPasswordInput** to a **User** and then transforming the **User** to a **UserResetPasswordOutput**.

So make sure to create those two PHP classes with this content:

```php
namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

final class UserResetPasswordInput
{
    #[Assert\Email]
    #[Assert\NotNull]
    #[Assert\NotBlank]
    private string $email;

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }
}
```


```php
namespace App\Dto;

final class UserResetPasswordOutput
{
    private string $email;

    private int $id;

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }
}
```
So to make this works let's change the **User** entity to specify the input and the output like the following code that you will need to add it to the <b class="text-danger">User</b> entity just above the class declaration:

```python
#[ApiResource(
    itemOperations: [
        'GET' => [],
    ],
    collectionOperations:[
        'post' => [
            'input' => UserResetPasswordInput::class,
            'output' => UserResetPasswordOutput::class,
            'status' => Response::HTTP_OK,
        ]
    ],
)]
class User ...
```

The <span class="badge bg-warning">status</span> property is to change the response status code from <span class="text-danger">201</span> to
<span class="text-danger">200</span>.

The **input** attribute is used during the deserialization process, when transforming the user-provided data to a resource instance. Similarly, the **output** attribute is used during the serialization process. This class represents how the User resource will be represented in the Response.

Now we need the transformers to do the actual work, we need the **UserResetPasswordInputTransformer** to transform the input that contains an email to the User object, and the **UserResetPasswordOutputTransformer** to transform the user to a **UserResetPasswordOutput**.

To do this, create a folder <b class="text-primary">DataTransformer</b> inside the **src** directory and copy the following files:

```php
namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;
use ApiPlatform\Core\Validator\ValidatorInterface;
use App\Dto\UserResetPasswordInput;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;
use Symfony\Component\Security\Core\User\UserInterface;
use UnexpectedValueException;

final class UserResetPasswordInputTransformer implements DataTransformerInterface
{
    public function __construct(
        private readonly ValidatorInterface $validator,
        private readonly UserRepository $userRepository
    ){
    }

    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        $input = $context['input'] ?? null;
        $inputClass = $input['class'] ?? null;

        return User::class === $to && UserResetPasswordInput::class === $inputClass;
    }

    public function transform($object, string $to, array $context = []): User
    {
        if (!$object instanceof UserResetPasswordInput) {
            throw new UnexpectedValueException('Transformation operation not allowed');
        }

        $this->validator->validate($object);

        $user = $this->userRepository->findOneByEmail($object->getEmail());

        if (!$user instanceof UserInterface) {
            $message = sprintf('User with the email "%s" not found', $object->getEmail());
            throw new UnprocessableEntityHttpException($message);
        }

        // Send an email to reset the password here.

        return $user;
    }
}
```


```php
namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;
use App\Dto\UserResetPasswordOutput;
use App\Entity\User;
use UnexpectedValueException;

final class UserResetPasswordOutputTransformer implements DataTransformerInterface
{
    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        $output = $context['output'] ?? null;
        $outputClass = $output['class'] ?? null;

        return $data instanceof User && UserResetPasswordOutput::class === $outputClass;
    }

    public function transform($object, string $to, array $context = []): ?UserResetPasswordOutput
    {
        if (!$object instanceof User) {
            throw new UnexpectedValueException('Transformation operation not allowed');
        }

        return (new UserResetPasswordOutput())
            ->setEmail($object->getEmail())
            ->setId($object->getId())
        ;
    }
}
```

To test our endpoint let's create some fixture and simply a user, that we can test with.


```bash
composer require orm-fixtures --dev
symfony console make:fixtures UserFixtures
```

Copy this to **UserFixtures** class and you're done:

```php
namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function __construct(
        private UserPasswordHasherInterface $passwordHasher
    ){
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('user@gmail.com');
        $user->setPassword(
            $this->passwordHasher->hashPassword($user, '123456')
        );

        $manager->persist($user);
        $manager->flush();
    }
}
```
Load the fixtures to the database:
```bash
symfony console doctrine:fixtures:load --no-interaction
```

### Test the results

You can use Postman or  curl:

```bash
curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"email":"user@gmail.com"}' \
    http://localhost/api/users

```

![Postman response of calling the /api/users endpoint](/imgs/blog/api/response.png)


Author: Imad Najmi
