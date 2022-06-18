const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const app = express()


// const {composer} = require('micro-bot')


// replace the value below with the Telegram token you receive from @BotFather
const token = '5451736771:AAEr8FMLyq7viac7Bj6XJhgrt5-JeK4FKfo';
// const bot = new composer
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
  
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  //starting my bot with default message
  var start= '/start'
  if(msg.text.includes(start)){
  bot.sendMessage(chatId, "Enter your first name");
  }
  
  //checking if the user has entered FIRST_NAME or not and then requesting for the last name
  var FIRST_NAME = "FIRST_NAME";
if (msg.text.includes(FIRST_NAME)) {
bot.sendMessage(chatId, "Enter your last name");
}
//checking if the user has entered LAST_NAME or not and then requesting for the phone number
var LAST_NAME = "LAST_NAME";
if (msg.text.includes(LAST_NAME)) {
bot.sendMessage(chatId, "Enter your Phone Number");
}
//checking if the user has entered PHONE NUMBER or not and then sending FIRST_NAME,LAST_NAME & PHONE NUMBER
var PHONE_NUMBER = "PHONE_NUMBER";
if (msg.text.includes(PHONE_NUMBER)) {
bot.sendMessage(chatId, "Hi FIRST_NAME LAST_NAME PHONE_NUMBER");
}
    
});

// calm-eyrie-56461
// https://calm-eyrie-56461.herokuapp.com

app.listen(process.env.PORT || 3000, function() {
  console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// "test": "echo \"Error: no test specified\" && exit 1"

// Creating app... done, ⬢ secure-plateau-02638
// https://secure-plateau-02638.herokuapp.com/