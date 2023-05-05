/*CMD
  command: /BanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send *User Tgid*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var badUsers = Bot.getProperty("mods", { list: {} })
if (!badUsers.list[user.telegramid] && user.telegramid != 2016839211) {
  Api.sendPhoto({
    photo: "https://images.app.goo.gl/4rcN9nn7G1skV28J9",
    caption: "<b>You were demoted</b>",
    parse_mode: "HTML"
  })

  return
} else if (user.telegramid == message) {
  Bot.sendMessage("*Error*: 404, User is not found!")
  return
} else var badUsers = Bot.getProperty("whitelisted", { list: {} })
if (badUsers.list[message] && user.telegramid != 2016839211) {
  Api.sendPhoto({
    photo: "https://imbt.ga/t2iO5V21N5",
    caption: "<b>User cannot be blocked!</b>",
    parse_mode: "HTML"
  })
  return
} else
var tgID  = message
Bot.setProperty(message + "ban", true)
Bot.sendMessage(
  " *Banned:* " + "[" + "User" + "]" + "(" + "tg://user?id=" + message + ")"
)
Bot.sendMessageToChatWithId(tgID,"*🤭 You Have Been Banned From Using This Bot*")
Api.sendMessage({
  chat_id: "2016839211",
  text: "*@" + user.telegramid + " *Banned*: " + message + "*",
  parse_mode: "markdown"
})

