const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TOKEN || "5166431465:AAGrbWjbO7498EcPvl7ixQuHoxYDDRn28j8";
const APP_URL = process.env.APP_URL || "https://simplesampleapp.herokuapp.com:443";
const PORT = process.env.PORT || 443;

const bot = new TelegramBot(TOKEN, {
    webHook:{
        port: PORT
    }
});

bot.setWebHook(`${APP_URL}/bot${TOKEN}`);

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, msg)
})