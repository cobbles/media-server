// Require the Bolt package (github.com/slackapi/bolt)
import {App} from '@slack/bolt';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// The echo command simply echoes on command
app.command('/check-torrents', async ({command, ack, say}) => {
  // Acknowledge command request
  await ack();
  await say('Here is a list of active torrents!');
});

app.command('/add-torrent', async ({command, ack, say}) => {
  // Acknowledge command request
  await ack();
  await say('Your torrent was added!');
});

app.command('/remove-torrent', async ({command, ack, say}) => {
  // Acknowledge command request
  await ack();
  await say('Your torrent has been removed!');
});

// All the room in the world for your code
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
