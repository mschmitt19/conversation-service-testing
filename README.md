<a  href="https://www.twilio.com">
<img  src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg"  alt="Twilio"  width="250"  />
</a>

# Conversations Service Testing Example

This example repository demonstrates how a Conversation Service SID can be specified during Access Token generation, then when this token is used client-side to create a conversation, the conversation will be created under the specified Conversation Service SID used in the Access Token.

---

## Local Testing

1. Clone this repository.

   ```bash
   git clone git@github.com:mschmitt19/conversation-service-testing.git
   ```

2. Install dependencies.

   ```bash
   cd serverless && npm install
   cd conversation-app && yarn
   ```

3. [Deploy your Twilio Function](#twilio-serverless-deployment).

4. Create a `.env` file from `.env.example` and update the `.env` file in the `conversation-app` with the domain of your serverless function.

5. Run the local web application:

   ```bash
   cd conversation-app && yarn dev
   ```

6. Navigate to [http://localhost:3000](http://localhost:3000).

7. Open the dev tools for your browser.

8. Click the `Create Conversation` button.

9. Monitor the console log outputs.

10. Within the Twilio console, navigate to `Conversations` > `Manage` > `Services`, then select the service you tested in the serverless function. From here, you can select `Conversations` on the left-hand side to see a list of conversations created under this service.

### Twilio Serverless deployment

You need to deploy the function associated with this example to mimic the access token generation.

#### Pre-deployment Steps

1. Change into the serverless directory and then rename `.env.example`.

   ```bash
   # Rename example env file
   cd serverless && cp .env.example .env
   ```

2. Open `.env` with your text editor and set the environment variables mentioned in the file.

3. Note: you will need to re-deploy the function to test multiple different Conversation Service SIDs.

4. Deploy the Twilio function to your account using the Twilio CLI:

   ```bash
   twilio serverless:deploy
   # Example Output
   # Deploying functions & assets to the Twilio Runtime
   # ⠇ Creating 1 Functions
   # ✔ Serverless project successfully deployed
   # Deployment Details
   # Domain: https://function-name-xxxx-dev.twil.io
   # Service:
   #    function (ZSxxxx)
   # ..
   ```

5. Copy and save the domain returned when you deploy a function. You will need to update the value in the `.env` file in the `conversation-app` directory.

If you forget to copy the domain, you can also find it by navigating to [Functions > API](https://www.twilio.com/console/functions/api) in the Twilio Console.

> Debugging Tip: Pass the `-l` or logging flag to review deployment logs.

---

## Changelog

### 1.0.0

**October 5, 2022**

- Updated README and pushed example code.

## Disclaimer

This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.
