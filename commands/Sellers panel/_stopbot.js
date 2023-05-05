/*CMD
  command: /stopbot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sellers panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var ban = Bot.getProperty(user.telegramid + "ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/yung92" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else 
Bot.setProperty(user.telegramid+"bot", "off", "string")
Bot.runCommand("/sellbots")
return

