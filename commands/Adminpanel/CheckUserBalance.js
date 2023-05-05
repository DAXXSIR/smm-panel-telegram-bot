/*CMD
  command: CheckUserBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send *User TgID*

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
} else var res = Libs.ResourcesLib.anotherUserRes("balance", message)
Bot.sendMessage("*User Balance Is:* " + res.value()+" YDP 💎")

