const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '857890236:AAHdpbmsUX7nMbOBmVVk0ubyW3mZZqxue08'
const bot = new TelegramBot (TOKEN, {polling: true})

bot.onText(/\/start/, (msg, [sourse]) => {
const { chat: { id }} = msg
bot.sendMessage(id, `Привет от chekbot: "Hi,🤝 ${msg.from.first_name}"
👍Нужна справка? 👌
Отправте слово 👉Справка👈 и следуйте указаниям`)
})

bot.onText(/\Справка/, (msg, [sourse]) => {
const { chat: { id }} = msg
bot.sendMessage(id, `${msg.from.first_name}, пошел на хуй лол 😭

🙈 хотя, если есть бабки то напишите:

👉- какая нужна справка (доктор/диагноз)
👉- ФИО, дата рождения
👉- нахуй ты вышел??????????????

ВАЖНО! далее отправь 👉Готово👈 и следуйте указаниям 👍` )
})

bot.onText(/\Готово/, (msg, [sourse]) => {
const { chat: { id }} = msg
bot.sendMessage(id, `${msg.from.first_name}, Ваш номер заказа SP0048377923 

👉После оплаты предъявите этот номер оператору:
оператор 👉 @olya7olya`)
})




