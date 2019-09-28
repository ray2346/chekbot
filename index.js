const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '857890236:AAHdpbmsUX7nMbOBmVVk0ubyW3mZZqxue08'
const bot = new TelegramBot (TOKEN, {polling: true})

bot.on(/\/start/, (msg, [sourse, match]) => {
const { chat: { id }} = msg
bot.sendMessage(id,`Привет от chekbot: "Hi,🤝 ${msg.from.first_name}"`)
})

bot.onText(/\Справка/, (msg, [sourse]) => {
const { chat: { id }} = msg
bot.sendMessage(id, 'пошел на хуй лол')
})

bot.onText(/\/start/, (msg, [sourse]) => {
const { chat: { id }} = msg
bot.sendMessage(id, 'mkljbjhghghcgfdgfgf')
})






