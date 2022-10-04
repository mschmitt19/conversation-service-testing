import Head from "next/head";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import type { NextPage } from "next";
import { Client } from "@twilio/conversations";
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const createConversation = async () => {
    const token = await fetch(
      `https://${process.env.NEXT_PUBLIC_SERVERLESS_DOMAIN}/chat-token?identity=mschmitt`
    )
      .then((res) => res.json())
      .then((res) => {
        return res.token;
      });

    console.log("token", token);

    const client = new Client(token);

    // Before you use the client, subscribe to the `'initialized'` event.
    client.on("initialized", async () => {
      // Use the client.
      const conversation = await client.createConversation({
        friendlyName: uuidv4(),
      });
      console.log(conversation);
    });
  };

  return (
    <Box as="main" padding="space70">
      <Head>
        <title>Conversations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        variant="primary"
        onClick={async () => await createConversation()}
      >
        Create Conversation
      </Button>
    </Box>
  );
};

export default Home;
