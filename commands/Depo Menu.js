/*CMD
  command: Depo Menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ➕ add funds
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var k = Bot.getProperty("management")
if (k == "on") {
  Api.sendPhoto({
    photo: "https://imbt.ga/0qL1iJuryt",
    caption:
      "<b> We are currently Saving power, Please use this command after some Hours</b>",
    parse_mode: "HTML"
  })

  return
} else var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*😌 Sorry*, The Bot is currently *🛠 Under Maintenance,*\n    🤘 _Please wait it may take up to 1-12 Hour_."
  )
  return
} else var ban = Bot.getProperty(user.telegramid + "ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/yung92" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else var state = Bot.getProperty("Deps")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage("*⛔️ Deposit System Is Currently OFF* ")
  return
} else var key = [[{ title: "CRYPTO CURRENCY", command: "/deposit" }]]
Bot.sendInlineKeyboard(
  key,
  "*👋 Welcome!*\n_Here You Can Add Funds To Your Balance!_\n\n➕ *Select Deposit Method*, All deposits will be converted to *USD Current Value*"
)
