---

title: What is SSH, How it's work, How we can use it and How to secure a open SSH connection?
image: /imgs/blog/ssh.png
slug: setup-secure-ssh-connection
description: SSH Connection for Linux servers
---


## 0. Introduction :

Accessing to machines remotely became a necessity a   long time ago and we can barely imagine how it would be if couldn't control computers from remote locations.

There are many ways to establish a connection with a
remote machine depending on the operating system you are running, but the two most used protocols are:
- Secure Shell (SSH) for Linux-based machines
- remote Desktop Protocol (RDP) for Windows-based machines.

The two protocols use the client and server applications to establish a remote connection.
In this post we will talk about SSH Protocol.

[SSH](https://en.wikipedia.org/wiki/Ssh_(Secure_Shell))  is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH.


## 1. How does SSH Work?

To open a connection you need a client who makes the requests and a server who listen to a requests made by the client.

1. **SSH client** : is an application you install on the computer which you will use to connect to another computer or server.
2. **SSH server** the corresponding server-side component which there is a component called an SSH daemon that is constantly listening to a specific TCP/IP port for possible client connection requests.


You need the IP address or the name of the remote machine you want to connect to.

### 3. Installation of  SSH
An open source SSH tool—widely used for Linux distributions— is OpenSSH.
On the client side you need the openssh-client to open a connection :
```bash
sudo apt-get install openssh-client
```

In order to accept SSH connections, a machine needs to have the server-side part of SSH software toolkit.

openssh-server : should be on the server side, (remote machine)
```bash
#install openssh server side
sudo apt-get install openssh-server

#check is ssh is active !
sudo service ssh status
```
To get the IP of the machine :
```bash
ip addr show
```

### 4. How to Open SSH Connection?

When openssh client and server are both installed, and you have the user, paddword and the IP address of the remote machine, use command this command to  open ssh connection :

```bash
ssh user@host -p port
```

1. The ssh key command instructs your system that you want to open an encrypted Secure Shell Connection.
2. user represents the account you want to access. For example, you may want to access the root user, which is basically synonymous for system administrator with complete rights to modify anything on the system.
3. host: refers to the computer you want to access. This can be an IP Address.

## 5. How to Secure an Open SSH Connection?
To secure an open ssh connection you need to edit the configuration file by this command :

```bash
sudo vim /etc/ssh/sshd_config
```

- First of all, you need to use a ***random strong password***
- ***Use another port*** because the majority of hackers try the default port, to do so change the line below :
    ```php
    port 5555
    ```
-  ***Disable empty password :*** (it's enabled by
    default) by changing the line in configration  file by that :
    ```php
     PermitEmptyPasswords no
    ```
- ***Disable Root Logins :*** to avoid hackers to access to your system directly, to do change the line on configuration by that :
  ```php
  PermitRootLogin no
  ```
- ***Use Public/Private  Keys for Authentication :*** because it's very secure than password mechanism and you won't need to enter a password anymore, the private key is stored on the client when the public key  is shared with the server.

  To generate a key-pair use the command :
  ```bash
  ssh-keygen -t rsa -b 5000 -C "comment...an email used commonly"
  ```
  Once an SSH key has been created, the ssh-copy-id command can be used to install it as an authorized key on the server. Once the key has been authorized for SSH, it grants access to the server without a   password.

  Use a command like the following to copy SSH key:
  ```bash
   ssh-copy-id -i ~/.ssh/mykey user@host # mykey=id_rsa.pub by default
  ```
  This logs into the server host, and copies keys to the server, and configures them to grant access by adding them to the authorized_keys file. The copying may ask for a password or other authentication for the server.

  Only the public key is copied to the server. The private key should never be copied to another machine.

  you will the be asked for passphrase, which is your password to unlock a given key each time you connect.

  then restart the ssh service by :

  ```
  sudo service ssh restart
  ```
- ***Disable Password Authentication :*** to forcing the use of the keys :
    ```bash
     PasswordAuthentication no # in the configuration file '/etc/ssh/sshd_config'
    ```

