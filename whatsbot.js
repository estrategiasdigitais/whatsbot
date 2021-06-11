// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {

  const chats = await client.getAllChatsGroups();
  //console.log(chats[0]);
  chats.forEach(chat => {
    const { user } = chat.id;
    console.log("id:" + user + " nome:" + chat.name);
  })
}