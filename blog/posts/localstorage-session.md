---
title: Why use PHP session to store the user cart instead of the localStorage
image: '/imgs/blog/session.jpg'
slug: localstorage-session
description: Why use PHP session to store the user cart instead of the localStorage
---


## Cookies:

**Cookies are text files stored on the client computer and they are kept of use tracking purpose. PHP transparently supports HTTP cookies.**


There are three steps involved in identifying returning users:

1. Server script sends a set of cookies to the browser. For example name, age, or identification number etc.
2. Browser stores this information on local machine for future use.
3. When next time browser sends any request to web server then it sends those cookies information to the server and server uses that information to identify the user.


```php
/// PHP provide setcookie() function to set a cookie
setcookie("name", "John Watkin", time()+3600, "/","", 0);
setcookie("age", "36", time()+3600, "/", "", 0);

// PHP provides many ways to access cookies. Simplest way is to use either $_COOKIE or $HTTP_COOKIE_VARS variables.
echo $_COOKIE["name"]; // "John Watkin"
echo $_COOKIE["age"]; // "36"
```

## Session
**Session variables are stored in associative array called $_SESSION[]. These variables can be accessed during lifetime of a session.**


When a PHP session is started following things happen −

- PHP first creates a unique identifier for that particular session which is a random string of 32 hexadecimal numbers such as 3c7foj34c3jj973hjkop2fc937e3443.
- A cookie called PHPSESSID is automatically sent to the user’s computer to store unique session identification string.
- A file is automatically created on the server in the designated temporary directory and bears the name of the unique identifier prefixed by sess_ ie sess_3c7foj34c3jj973hjkop2fc937e3443.

```php
// start a session
session_start();

// store session data
$_SESSION[“username”] = “Prashant”;

// terminate the session
session_destroy();
```


**PHP Session data** is NOT Permanent Data storage as when you destroy the browsers session you will loose the Data. This is useful if you dont want to permanently store data.


## Local Storage

**The LocalStorage API gives front-end web developers access to a simple key-value datastore that can be used to save data on a users computer.**

Before the introduction of LocalStorage, developers that wanted to store data on the client would need to use **browser cookies**. While this approach did work it had some problems. The first issue is that a cookie can only store **4,096 bytes** of data, which isn’t really all that much. Another issue is that **cookies are sent up to the server with every HTTP request** that is made by the client. This increases the size of requests, leading to higher bandwidth usage and slower request times.

```js
// LocalStorage is supported!
if (localStorage) {
    localStorage.setItem(key, value); // Set a value

    localStorage.getItem(key); // Get a value

    localStorage.removeItem(key); // Delete a value
}
```

**Browsers Local Storage** is Permanent unless you delete the data yourself or you clear the browsers cache. Some users clear the cache from time to time so this can be a problem.

## Why use PHP session to store the user cart instead of the localStorage.

1. **Degree of difficulty of calculation**: I have more control on the cart, when a user choose a product, I calculate the product tax, I check if it is already in the cart or not, I add the selected options properly, so I have to do a lot of calculation and that calculation is easy in PHP than JS.

2. **Accessibility**: As you know if a user is connected and he selected a lot products before he sign in, I have to save all the selected products(his cart) in the database to not lose data when he is disconnected, so the next time, he will find all previous selected products, and if I saved the the cart in the localStorage there is no way to access that cart except with an AJAX request.

3. **Easy to interact with the backend services**: So whenever I need manipulate the products of the cart to save it in the DB, prepare an order or merge the the products saved in the DB with the products of the cart(that exists in the localStorage) when a user signed in, I need to push the data of the localStorage to the server by an AJAX request, and that is not easy than if the cart is stored in the PHP session.

4. **Security**: The localStorage can be deleted by the user.

5. **Availability**: : LocaleStorage API which is basically a cookie 2.0. It doesn't work on very old browsers though. The PHP session would work anywhere and is temporary, the data will be removed when destroy the browser session so I saved the cart in the database every time the user logs out.

___

**IMAD Najmi**: Symfony Developer
