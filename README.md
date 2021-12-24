# Code for Symbl.ai "How to Stream Audio to a Browser with WebSockets" tutorial

## Installation

After cloning the repository, install the needed dependencies:

```bash
npm install
```

## Add Keys

You need a Symbl.ai's account to run this tutorial. [Create a Symbl.ai account](https://platform.symbl.ai/?_ga=2.88513691.1656198395.1640249940-550822191.1640249940#/signup), then obtain the App ID and App Secret.

Rename `.env.example` to `.env`:

```bash
mv .env.example .env
```

Then place the values of the keys.

## Run the Server

To run the server:

```bash
npm start
```

This will run the server at `localhost:3000`
