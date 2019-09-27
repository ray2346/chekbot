const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '857890236:AAHdpbmsUX7nMbOBmVVk0ubyW3mZZqxue08'
const bot = new TelegramBot (TOKEN, {polling: true})
bot.on('message', msg =>{
   bot.sendMessage(msg.chat.id,`Привет от chekbot: "Hi,🤝 ${msg.from.first_name}"`)
})
bot.on('message', msg =>{
   bot.sendMessage(msg.chat.id,`${msg.from.first_name}, пожалуйста распишите данные:
- тип справки (доктор, диагноз);
- ФИО
- дата рождения`)
})
