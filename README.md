# Shopify Frontend Challenge

An app built as part of a Shopify job application. It allows you to interact with [OpenAI's](https://openai.com/api/) GPT-3 AI model via a clean and simple user interface.
## Demo

The live app can be found at [https://emunib-shopify-frontend-challenge.netlify.app/](https://emunib-shopify-frontend-challenge.netlify.app/)

## Environment Variables

To run this project locally, you will need to add the following environment variables to a .env file located in the root directory:

```
REACT_APP_API_URL=https://api.openai.com/v1/engines/text-curie-001/completions
REACT_APP_API_KEY=<OpenAI API Key>
```
The `REACT_APP_API_KEY` can be obtained for free at [OpenAI](https://openai.com/api/) after signing up.

## Usage

To clone and run this project you will need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/).

```bash
# clone the repository
$ git clone https://github.com/emunib/shopify-frontend-challenge.git

# go into the project
$ cd shopify-frontend-challenge

# install dependencies
$ npm install

# start the app
$ npm start
```

You can go to [http://localhost:3000/](http://localhost:3000/) to use the app.

## Contact

This web app was designed and developed by Ehtasham Munib.

You can follow me on [LinkedIn](https://www.linkedin.com/in/emunib/).