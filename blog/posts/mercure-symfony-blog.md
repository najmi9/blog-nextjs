---
title: How to use Mercure Protocol with Symfony and API Platform ?
description: using mercure bundle in symfony application
image: /imgs/blog/mercure.jpeg
slug: mercure-symfony-blog
---


## Demo and Inspiration  :
The idea of this article is very simple, by using mercure and symfony, and when an admin publish a notification all connected users will be notified by the message of the admin in real time.

![Mercure Notitfication Demo](/imgs/blog/mercure_demo.png)

## Mercure Protocol :
[Mercure Protocol](https://mercure.rocks/docs/mercure) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way. It is especially useful to publish async and real-time updates of resources served through web APIs, to reactive web and mobile apps.

This protocol built-in top of [server-sent-event](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) and POST HTTP request.

## [Symfony](https://symfony.com)
Symfony is PHP Framework and a set of decoupled and reusable PHP libraries
aim to automate the common activities in web development like authentication, sessions, databases etc...

## How SEE works

Traditionally, a web page has to send a request to the server to receive new data, that is the page requests data from the server.
With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page.

## Install Symfony
```bash
# if you have symfony binary
symfony new mercure_symfony --full
# or by using composer
composer create-project symfony/website-skeleton mercure_symfony
cd mercure_symfony
# create a new controller for the home page
php bin/console make:controller HomeController
#run the php server on 80 port
php -S localhost:8000 -t public
```

### Install Mercure Bundle
This bundle will us to integrate Mercure into Symfony project, if you're using Symfony Flex, run this command to install mercure bundle.

```bash
composer require mercure #or composer require symfony/mercure-bundle
```

Download the hub binary from [github](https://github.com/dunglas/mercure/realeses) and extract it with the following command:

```bash
tar -xzf mercure_0.10.4_Linux_arm64.tar.gz
```

or use this command:
```bash
mkdir mercure
wget https://github.com/dunglas/mercure/releases/download/v0.10.4/mercure_0.10.4_Linux_x86_64.tar.gz -P mercure
tar -xvzf mercure/mercure_0.10.4_Linux_x86_64.tar.gz
```

Or you can use docker, this is an example of **docker-compose.yaml** file:

```yaml
version: '3.7'

services:
  mercure:
    image: dunglas/mercure
    container_name: mercure-container
    restart: unless-stopped
    ports:
            - '3000:80'
    environment:
      SERVER_NAME: ':80'
      MERCURE_PUBLISHER_JWT_KEY: ${MERCURE_PUBLISHER_JWT_KEY}
      MERCURE_SUBSCRIBER_JWT_KEY: ${MERCURE_SUBSCRIBER_JWT_KEY}
      DEBUG: 1
      MERCURE_EXTRA_DIRECTIVES: |
        cors_origins http://127.0.0.1:8000
        ui: true
        subscriptions: true
    command: /usr/bin/caddy run -config /etc/caddy/Caddyfile.dev
    volumes:
      - mercure_data:/data
      - mercure_config:/config

volumes:
  mercure_data:
  mercure_config:
```

Set the URL of your hub as the value of the **MERCURE_PUBLISH_URL** environment variable. The *.env* file of your project has been updated by the Flex recipe to provide example values. Set it to the URL of the Mercure Hub (http://localhost:3000/.well-known/mercure by default).

Set a secret key for your Mercure Hub in *.env* file, by default is equal to *!ChangeMe!* you should use a strong one in production. For the *MERCURE_JWT_TOKEN* leave it as it because we will
create one programmatically just in a few moments.

```python
MERCURE_PUBLISH_URL=http://localhost:3000/.well-known/mercure #if you're running the hub directly
MERCURE_URL=https://mercure/.well-known/mercure #if you're using docker
MERCURE_PUBLIC_URL=https://mercure/.well-known/mercure #if you're using docker
MERCURE_PUBLISHER_JWT_KEY="random_mercure_publisher_jwt_key"
MERCURE_SUBSCRIBER_JWT_KEY="random_mercure_subscriber_jwt_key"
```

## Publication
The publisher sends updates by issuing POST HTTPS requests to the hub URL. When it receives an update, the hub dispatches it to subscribers using the established server-sent events connections.

```
POST /.well-known/mercure HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer $JWT
topic=https://example.com/foo&data=the%20content
```
In Symfony the Mercure Component provides an <b class="text-warning">Update</b> value object representing the update to publish. It also provides a Publisher service to dispatch updates to the Hub.
The Publisher service can be injected using the autowiring in any other
service, including controllers.

You can also let Symfony dispatching the updates asynchronously thanks to the provided integration with the Messenger component.
To install it run this command :
```bash
composer require messenger
```

```php
<?php

declare(strict_types=1);

namespace App\Controller;

use ...;

class MessageController extends AbstractController
{
    /**
     * @Route(path="/message", name="message", methods={"POST"})
     */
    public function index(Request $request, MessageBusInterface $bus):Response
    {
        $data = [...]; // Get the data from the request

        $update = new Update(
            ['http://my-website.com/notify'],
            json_encode($data),
            true
       );

        $bus->dispatch($update);

        return $this->json(['message' => 'published']);
    }
```

The first parameter to pass to the Update constructor is the topic being updated. This topic should be an IRI (Internationalized Resource Identifier, RFC 3987): a unique identifier of the resource being dispatched.

Usually, this parameter contains the original URL of the resource transmitted to the client, but it can be any valid IRI, it doesn’t have to be a URL that exists (similarly to XML namespaces).

The second parameter of the constructor is the content of the update. It can be anything, stored in any format. However, serializing the resource in a hypermedia format such as JSON-LD, Atom, HTML or XML is recommended.

The third parameter is a boolean, if it's true the subscribers must provide to the Hub a JWT containing a topic selector matching by the update’s topic.

To provide this JWT, the subscriber can use a cookie, or a Authorization HTTP header.

## Subscrining to the events

We listen to that in javascript by a classic listener:

```js
{# templates/home/index.html.twig #}
{% extends 'base.html.twig' %}

{% block body %}
<div class="container m-5 p-5">
    <div class="alert" id="message"></div>
    <div class="bg-light">
        <h1> Go to admin page tp publish a notification ! </h1>
        <a href="{{ path('admin') }}" class="btn btn-outline-primary">
            Admin Page Here !
        </a>
  </div>
</div>

<script type="text/javascript">
    const url = new URL({{ mercure(['http://my-website.com/notify']) }});

    const LAST_EVENT_ID_KEY = 'lastEventId';

    const lastEventId = localStorage.getItem(LAST_EVENT_ID_KEY);

    if (null !== lastEventId){
        url.searchParams.append('lastEventID', lastEventId);
    }

    const eventSource = new EventSource(url);

    const messageContainer = document.querySelector('div#message');

    eventSource.onmessage = e => {
        localStorage.setItem(LAST_EVENT_ID_KEY, e.lastEventId);

        const data = JSON.parse(e.data);

        const div = document.createElement('div');
        div.setAttribute('class', 'alert alert-success');
        div.innerHTML = data.message;

        messageContainer.appendChild(div);
    };

    // close the event source before leaving the page
    window.addEventListener('beforeunload', () => {
        if (eventSource != null) {
            eventSource.close();
        }
    });
</script>
{% endblock %}
 ```
From the **admin** route we will publish notification to all connected devices.

```php
<?php

declare(strict_types=1);

namespace App\Controller;

use ...;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->render('admin/index.html.twig');
    }
}
```

With a POST ajax request to **/message** we dispatch an update for the topic **http://my-website.com/notify**.

```html
{# templates/admin/index.html.twig #}
{% extends 'base.html.twig' %}
{% block body %}
    <div class="m-5 p-5 bg-light border">
        <h4> Message to notify all connected users ! </h4>
        <form method="POST">
            <div class="form-group">
                <input type="text" name="message" class="form-control" placeholder="Enter a mssage !">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success">  submit  </button>
            </div>
        </form>
    </div>
    <script type="text/javascript">
        document.querySelector('form').onsubmit = e =>{
            e.preventDefault();
            const msg = document.querySelector("input[name='message']").value;

            fetch('/message', {
                method: 'POST',
                body: JSON.stringify({'message': msg}) ,
            });
        };
    </script>
{% endblock %}
```

## Authorization
There is two methods of authorization to private updates, one by **Authorization HTTP header**, and the other by **Cookies** when the client is a web browser and uses the same domain or subdomain of the Hub URl, Cookies are automatically sent by the browsers to the hub when opening an EventSource connection if the **withCredentials** attribute is set to **true**.

```js
const eventSource = new EventSource(hub, {
    withCredentials: true
});
```
The native implementation of EventSource doesn’t allow specifying headers. For example, authorization using Bearer token. In order to achieve that, use a [polyfill](https://github.com/Yaffle/EventSource)

```js
const es = new EventSourcePolyfill(url, {
    headers: {
        'Authorization': 'Bearer ' + token,
    }
});
```
The token should be generated by using the **Subscriber Key** not the **Publisher Key** or the **MERCURE_JWT_KEY** so the subscriber can not use the same token to publish updates.


The generated cookie contains a JWT, itself containing the appropriate topic selector. This cookie will be automatically sent by the web browser when connecting to the Hub. Then, the Hub will verify the validity of the provided JWT, and extract the topic selectors from it.
To generate the JWT, we will use the  recommended `lcobucci/jwt` library. to install it:

```bash
composer require lcobucci/jwt
```

## Generating Programmatically The JWT Used to Publish.

Instead of directly storing a JWT in the configuration, you can create a service that will return the token used by the Publisher object:

```php
<?php

declare(strict_types=1);

namespace App\Mercure;

use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Builder;

class JWTProvider
{
    /* publisher secret or the MERCURE_JWT_KEY*/
    private string $publisher_secret;

    function __construct(string $publisher_secret)
    {
          $this->publisher_secret = $publisher_secret;
    }

     public function __invoke(): string
    {
        return (new Builder())
            ->set('mercure', ['publish'=>['http://my-website.com/notify']])
            ->sign(new Sha256(), $this->publisher_secret)
            ->getToken()
        ;
    }
}
```
Then, reference this service in the bundle configuration:

```yaml
# config/packages/mercure.yaml
mercure:
    hubs:
        default:
            url: '%env(MERCURE_PUBLISH_URL)%'
            jwt_provider: App\Mercure\JWTProvider

```

Now you can remove the *MERCURE_JWT_TOKEN* in *.env* file because it will be generated programmatically.

This method is especially convenient when using tokens having an expiration date, that can be refreshed programmatically.

## Generating Programmatically The Cookie Used To Subscribe.

```php

<?php

declare(strict_types=1);

namespace App\Mercure;

use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use App\Entity\User;

class MercureCookieGenerator
{
    private string $subscriber_secret;

    function __construct(string $subscriber_secret)
    {
        $this->subscriber_secret = $subscriber_secret;
    }

    public function generate(): string
    {
        $token = (new Builder())
            ->set('mercure', ['subscribe'=>['http://my-website.com/notify']])
            ->sign(new Sha256(), $this->subscriber_secret)
            ->getToken()
        ;

        return "mercureAuthorization={$token}; Path=/.well-known/mercure; HttpOnly";
    }
}
```

Let symfony know about the two services :

```yaml
#config/services.yaml
services:

   #...

   App\Mercure\MercureCookieGenerator:
        arguments:
            $subscriber_secret: '%env(MERCURE_SUBSCRIBER_JWT_KEY)%'

    App\Mercure\JWTProvider:
        arguments:
            $publisher_secret: '%env(MERCURE_PUBLISHER_JWT_KEY)%'

```
And here is the controller:

```php
<?php

declare(strict_types=1);

namespace App\Controller;

use ...;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function index(MercureCookieGenerator $cookieGenerator) :Response
    {
        $response =  $this->render('home/index.html.twig');
        $response->headers->set('set-cookie', $cookieGenerator->generate());

        return $response;
    }
}
```
## Run The Hub
```bash
 ./path/to/mercure-binary --subscriber-jwt-key='random_mercure_subscriber_jwt_key' --publisher-jwt-key='random_mercure_publisher_jwt_key' --debug=1 --addr='localhost:3000' --allow-anonymous --cors-allowed-origins='http://localhost:8000'
```

Configure the messenger:

```yaml
#config/messenger.yaml
framework:
    messenger:
        transports:
             async: '%env(MESSENGER_TRANSPORT_DSN)%'
             failed: 'doctrine://default?queue_name=failed'

        routing:
            'Symfony\Component\Mercure\Update': async
```

You can use the transport that you want, redis for example:
```
#.env
MESSENGER_TRANSPORT_DSN=redis://localhost:6379/messages
```

Run the messenger worker:

```bash
symfony console messenger:consume async -vvv
```
## Api Platform and Mercure : AsyncAPI

[Api Platform Core](https://api-platform.com/docs/core/)
is an easy-to-use and powerful library to create hypermedia-driven REST APIs. It is a component of the API Platform framework. It can be used as a standalone or with the Symfony framework (recommended).


API Platform can automatically push the modified version of the resources exposed by the API to the currently connected clients (webapps, mobile apps...) using the Mercure protocol.

Use the mercure attribute to hint API Platform that it must dispatch the updates regarding the given resources to the Mercure hub

You can see more information [here](https://api-platform.com/docs/core/mercure/#creating-async-apis-using-the-mercure-protocol)

```php
<?php

#src/Entity/Product.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ApiResource(mercure=true)
 */
class Product
{
  //...
}
```

___

## Author : Imad NAJMI
## Github  : I created a chat with mercure [ here.](https://github.com/najmi9/mercure_symfony_blog)
## Also you see a working example about mercure : [here.](https://github.com/najmi9/mercure)
