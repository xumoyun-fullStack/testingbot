const TelegramBot = require("node-telegram-bot-api");
const { TOKEN, PORT, APP_URL } = require("./config");

const bot = new TelegramBot(TOKEN, {
    webHook:{
        port: PORT
    }
});

bot.setWebHook(`${APP_URL}/bot${TOKEN}`);

bot.on("message", (msg) => {
    if(msg == "/start") bot.sendMessage(msg.chat.id, "Assalomu aleykum man halam ishlab duribmon!!")
})