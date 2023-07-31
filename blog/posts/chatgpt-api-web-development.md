---
title: Leveraging the Power of ChatGPT API in Web Development
slug: chatgpt-api-web-development
image: /imgs/blog/api/openai.jpg
description: Harnessing the capabilities of ChatGPT API to enhance user interaction and engagement in web applications
---

### Introduction
In this comprehensive article, I will demonstrate how to utilize the ChatGPT API, a product of OpenAI, in web development. For this, I will use a practical use case: integrating the ChatGPT API into a web application to create an interactive chatbot. This chatbot will be capable of handling user queries, providing information, and enhancing overall user engagement.

The complete source code is available [Here](https://github.com/najmi9/chatgpt-api-demo).

### Requirements:
Docker & Docker-compose
- Node.js
- React JS
- OpenAI account for API key

### Setting up the Docker Environment
Before we begin, ensure that Docker and Docker-compose are installed on your machine. We will use Docker to create a containerized environment for our application, ensuring that it remains isolated from other processes on the machine and can be easily deployed.

```bash
# Check Docker installation
docker --version

# Check Docker-compose installation
docker-compose --version
```

### Setting up the Node.js Environment
Next, we need to set up our Node.js environment. We will use Node.js to create our server-side application, which will interact with the ChatGPT API.
```bash
# Check Node.js installation
node --version

# Check npm installation
npm --version
```
### Setting up the React JS Environment
We will use React JS to create our client-side application. This application will interact with our server-side application to send user queries to the ChatGPT API and display the responses.
```bash
# Check React installation
npx create-react-app --version
```

### Setting up the OpenAI Account
To use the ChatGPT API, you need an OpenAI account. Once you've created your account, navigate to the API section to generate your API key. This key will be used to authenticate your application's requests to the ChatGPT API.

### Creating the Server-side Application
First, we'll create a simple Express.js server that will handle our application's interactions with the ChatGPT API.
```bash
# Create a new directory for the server-side application
mkdir chatgpt-api-server
cd chatgpt-api-server

# Initialize a new Node.js application
npm init -y

# Install necessary dependencies
npm install express axios dotenv cors
```
Next, create a new file named <b>server.js</b> and add the following code:
```js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: message,
        max_tokens: 60,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const chatGptResponse = response.data.choices[0].text.trim();
    res.json({ message: chatGptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
```
This code creates an Express.js server that listens for POST requests at the /api/chat endpoint. When a request is received, it sends a request to the ChatGPT API with the user's message and returns the response.
### Creating the Client-side Application
Next, we'll create a React application that will interact with our server.
```bash
# Create a new React application
npx create-react-app chatgpt-api-client
cd chatgpt-api-client

# Install necessary dependencies
npm install axios
```

Next, create a new component named <b>Chat.js</b> and add the following code:

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async (event) => {
    event.preventDefault();

    setChatHistory([...chatHistory, { message, type: 'user' }]);
    setMessage('');

    const response = await axios.post('http://localhost:5000/api/chat', { message });
    setChatHistory([...chatHistory, { message, type: 'user' }, { message: response.data.message, type: 'bot' }]);
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.type}>
            {chat.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
```

This code creates a simple chat interface that allows the user to send messages to the server and displays the responses.

### Deploying the Application
Finally, we'll use Docker to deploy our application. Create a Dockerfile in both the server and client directories with the following content:
```dockerfile
# Server Dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "server.js" ]

# Client Dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
```

Next, create a docker-compose.yml file in the root directory with the following content:
```yaml
version: '3'
services:
  server:
    build: ./chatgpt-api-server
    ports:
      - 5000:5000
  client:
    build: ./chatgpt-api-client
    ports:
      - 3000:3000
```
Finally, run the following command to start the application:

```bash
docker-compose up
```
Conclusion
In this article, we've seen how to integrate the ChatGPT API into a web application to create an interactive chatbot. This is just one of the many ways you can leverage the power of the ChatGPT API in your projects. The possibilities are endless!

Please note that this is a simplified example and may not include all the best practices for production-grade applications. Always ensure to follow the best practices for error handling, security, and performance when building applications for production.
