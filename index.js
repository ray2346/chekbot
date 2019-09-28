const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '857890236:AAHdpbmsUX7nMbOBmVVk0ubyW3mZZqxue08'
const bot = new TelegramBot (TOKEN, {polling: true})

bot.on('message', msg => {
const { chat: { id }} = msg
bot.sendMessage(id, 'Pong')
})

