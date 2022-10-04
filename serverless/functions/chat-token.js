const AccessToken = require("twilio").jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

exports.handler = function (context, event, callback) {
  const response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.appendHeader("Access-Control-Allow-Headers", "Content-Type");
  response.appendHeader("Content-Type", "application/json");

  const { identity } = event;

  const chatGrant = new ChatGrant({
    serviceSid: context.CONVERSATION_SERVICE_TEST,
  });

  const token = new AccessToken(
    context.ACCOUNT_SID,
    context.TWILIO_API_KEY,
    context.TWILIO_API_SECRET,
    { identity: identity }
  );

  token.addGrant(chatGrant);

  response.setBody({ token: token.toJwt() });
  return callback(null, response);
};
