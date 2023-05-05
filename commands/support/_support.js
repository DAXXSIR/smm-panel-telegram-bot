/*CMD
  command: /support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: support
  answer: Input now your *Message?*
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var admin_chat = Bot.getProperty("admin_chat")
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (!admin_chat) {
  Bot.sendMessage("Sorry. Bot have no *admin* now")
  return // exit
}
let msg = message
if (msg.length < 3) {
  Bot.sendMessage(
    "*⚠️ Please, send a longer message!*\n_Try to explain better what you need, as much as you can in a single message!_\n\n*➡️ Need to add a photo?\n*_Grab photo link in _@HostIMGbot")
Bot.runCommand("/mess1")
} else {
  let user_link = Libs.commonLib.getLinkFor(user)
  let msg = message

  var b = [
    [
      {
        title: "Reply to user " + user.first_name,
        command: "/reply" + user.telegramid
      }
    ]
  ]

  Bot.sendInlineKeyboardToChatWithId(
    admin_chat,
    b,
    "*📩 New Support Message*\n*From User:* " + inf + "\n*Message:* " + msg)
  Bot.sendKeyboard("Back ⏪",
    "*Message sent to the administrator:*" + "\n" + message + "\n"
  )
}

