const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '857890236:AAHdpbmsUX7nMbOBmVVk0ubyW3mZZqxue08'
const bot = new TelegramBot (TOKEN, {polling: true})


bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    if (messageText === 'справка')
    {sendMessageByBot(messageChatId, "Вас приветствует магазин - 🌈420 SHOP_family:🌈"
        + '\n' + "Наши контакты:"
        + '\n' + "Операторы -"
        + '\n' + "👉 @SHARA200  Виктория"
        + '\n' + "💠Мы на гидре"
        + '\n' + "http://hydraruzxpnew4af.onion/market/2535"
        + '\n' + "🔥Удачных покупок!🔥"
        + '\n' + "➖➖➖➖➖➖➖➖➖➖"
        + '\n' + "🏠 Архангельск"
        + '\n' + "[Нажмите 👉 /city1 ]"
        + '\n' + "🏠 Барнаул"
        + '\n' + "[Нажмите 👉 /city2 ]"
        + '\n' + "🏠 Белгород"
        + '\n' + "[Нажмите 👉 /city3 ]"
        + '\n' + "🏠 Санкт-Петербург"
        + '\n' + "[Нажмите 👉 /city4 ]"
        + '\n' + "🏠 Югорск"
        + '\n' + "[Нажмите 👉 /city5 ]"
        + '\n' + "🏠 Красноярск"
        + '\n' + "[Нажмите 👉 /city6 ]"
        + '\n' + "🏠 Новосибирск"
        + '\n' + "[Нажмите 👉 /city7 ]"
        + '\n' + "🏠 Новокузнецк"
        + '\n' + "[Нажмите 👉 /city8 ]"
        + '\n' + "🏠 Кемерово"
        + '\n' + "[Нажмите 👉 /city9 ]");}});

function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}
