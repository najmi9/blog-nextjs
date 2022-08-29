---

title: "AWS Web Services For Web Developers"
image: "/imgs/blog/aws/aws.webp"
slug: aws-web-services-for-web-developers
author: IMAD NAJMI

---

___

*This is a list of some aws web services that I should keep in mind, so whenever I need a service I can goolge his documentation and use it.*

___

**Elastic Beanstalk**: AWS service to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications. AWS Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and AWS Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.
___
**ECS**:  is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster of Amazon EC2 instances.
___
**Fargate**: is a technology that you can use with Amazon ECS to run containers without having to manage servers or clusters of Amazon EC2 instances. With Fargate, you no longer have to provision, configure, or scale clusters of virtual machines to run containers. This removes the need to choose server types, decide when to scale your clusters, or optimize cluster packing.
___
**X-Ray**: AWS X-Ray makes it easy for developers to analyze the behavior of their distributed applications by providing request tracing, exception collection, and profiling capabilities.
___
**ACM**: AWS Certificate Manager (ACM) makes it easy to provision, manage, deploy, and renew SSL/TLS certificates.
___
**Route53**: is a highly available and scalable Domain Name System (DNS) web service
___
**KMS**: AWS Key Management Service is a managed service that makes it easy for you to create and manage keys and control the use of encryption across a wide range of AWS services. KMS is a secure and resilient service that uses FIPS 140-2 validated hardware security modules to isolate and protect your keys.
___
**Cognito**: Amazon Cognito offers user pools and identity pools. User pools are user directories that provide sign-up and sign-in options for your app users. Identity pools provide AWS credentials to grant your users access to other AWS services.
___
**SNS**: Amazon SNS is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and event-driven serverless applications. Amazon SNS provides topics for high-throughput, push-based, many-to-many messaging.
___
**SQS**: Amazon SQS provides queues for high-throughput, system-to-system messaging. You can use queues to decouple heavyweight processes and to buffer and batch work. Amazon SQS stores messages until microservices and serverless applications process them.
___
**Knesis**: Collect, process, and analyze data streams in real time.
___
**Parameter Store**: Centralized storage and management of your secrets and configuration data such as passwords, database strings, and license codes. You can encrypt values, or store as plain text, and secure access at every level.
___
**Secrets Manager**: AWS Secrets Manager helps you protect access to your applications, services, and IT resources. You can easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.
___
**DynamoDB**: DynamoDB is a fully managed, key-value, and document database that delivers single-digit-millisecond performance at any scale.
___
**EC2**: Virtual Servers in the Cloud
___
**VPC**: Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.
___
**Auto Scaling Groups**:  contains a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management. An Auto Scaling group also enables you to use Amazon EC2 Auto Scaling features such as health check replacements and scaling policies. Both maintaining the number of instances in an Auto Scaling group and automatic scaling are the core functionality of the Amazon EC2 Auto Scaling service.
___
**VPC Endpoints**: A VPC endpoint enables connections between a virtual private cloud (VPC) and supported services, without requiring that you use an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Therefore, you control the specific API endpoints, sites, and services that are reachable from your VPC.
___
**ELB**: Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones. It monitors the health of its registered targets and routes traffic only to the healthy targets. You can select the type of load balancer that best suits your needs.
___
**Security Groups**:  acts as a virtual firewall, controlling the traffic that is allowed to reach and leave the resources that it is associated with. For example, after you associate a security group with an EC2 instance, it controls the inbound and outbound traffic for the instance.
___
**NACLs**: NACL's allow for rules to be defined for both inbound and outbound traffic individually. Security groups only allow to define rules that apply to both inbound and outbound. You can’t defined difference behaviors for each.
___
**IAM**: AWS Identity and Access Management (IAM) is a web service for securely controlling access to AWS services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access.
___
**CloudFront**: Amazon CloudFront speeds up distribution of your static and dynamic web content, such as .html, .css, .php, image, and media files. When users request your content, CloudFront delivers it through a worldwide network of edge locations that provide low latency and high performance.
___
**CloudTrail**: AWS CloudTrail is an AWS service that helps you enable governance, compliance, and operational and risk auditing of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.
___
**CloudFormation**: AWS CloudFormation enables you to create and provision AWS infrastructure deployments predictably and repeatedly. It helps you leverage AWS products such as Amazon EC2, Amazon Elastic Block Store, Amazon SNS, Elastic Load Balancing, and Auto Scaling to build highly reliable, highly scalable, cost-effective applications in the cloud without worrying about creating and configuring the underlying AWS infrastructure. AWS CloudFormation enables you to use a template file to create and delete a collection of resources together as a single unit (a stack).
___
**SAM**: The AWS Serverless Application Model (AWS SAM) is an open-source framework that enables you to build serverless applications on AWS. It provides you with a template specification to define your serverless application, and a command line interface (CLI) tool.
___
**CI / CD**:can be pictured as a pipeline, where new code is submitted on one end, tested over a series of stages (source, build, test, staging, and production), and then published as production-ready code.
___
**CodeCommit**: AWS CodeCommit is a version control service that enables you to privately store and manage Git repositories in the AWS Cloud.
___
**Docker**: Docker is a technology that provides the tools for you to build, run, test, and deploy distributed applications that are based on Linux containers. Amazon ECS uses Docker images in task definitions to launch containers as part of tasks in your clusters.
___
**CodeBuild**: AWS CodeBuild is a fully managed build service that compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.
___
**CodeDeploy**: AWS CodeDeploy is a deployment service that enables developers to automate the deployment of applications to instances and to update the applications as required.
___
**S3**: Amazon Simple Storage Service (Amazon S3) is storage for the internet. You can use Amazon S3 to store and retrieve any amount of data at any time, from anywhere on the web.
___
**ElastiCache**: Amazon ElastiCache makes it easy to set up, manage, and scale distributed in-memory cache environments in the AWS Cloud. It provides a high performance, resizable, and cost-effective in-memory cache, while removing complexity associated with deploying and managing a distributed cache environment. ElastiCache works with both the Redis and Memcached engines; to see which works best for you, see the Comparing Memcached and Redis topic in either user guide.
___
**AWS Lambda**: Amazon Lambda is a compute service that runs code in response to events and automatically manages the compute resources required by that code.
___
**API Gateway**: Amazon API Gateway enables you to create and deploy your own REST and WebSocket APIs at any scale. You can create robust, secure, and scalable APIs that access Amazon Web Services or other web services, as well as data that’s stored in the AWS Cloud. You can create APIs to use in your own client applications, or you can make your APIs available to third-party app developers.
___
**Step Function**: AWS Step Functions makes it easy to coordinate the components of distributed applications as a series of steps in a visual workflow. You can quickly build and run state machines to execute the steps of your application in a reliable and scalable fashion.
___

IMAD NAJMI
