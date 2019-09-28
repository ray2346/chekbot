const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '857890236:AAHdpbmsUX7nMbOBmVVk0ubyW3mZZqxue08'
const bot = new TelegramBot (TOKEN, {polling: true})
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    if (messageText === '/start')
    {sendMessageByBot(messageChatId, "Вас приветствует магазин - 🌈420 SHOP_family:🌈")}
})
