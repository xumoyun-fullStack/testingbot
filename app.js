const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TOKEN;
const APP_URL = process.env.APP_URL;
const PORT = process.env.PORT;

const bot = new TelegramBot(TOKEN, {
    webHook:{
        port: PORT
    }
});

bot.setWebHook(`${APP_URL}/bot${TOKEN}`);

bot.on("message", (msg) => {
    if(msg == "/start") bot.sendMessage(msg.chat.id, "Assalomu aleykum man halam ishlab duribmon!!")
})