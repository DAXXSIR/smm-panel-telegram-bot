/*CMD
  command: Removeka
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send id
  keyboard: 
  aliases: 
CMD*/

let admin = Bot.getProperty("adminID")

if (admin == user.telegramid) {
if (message == "Back 🔙") {
  Bot.runCommand("/panel2002")
} else {
  let msg = message
  Bot.setProperty("id", msg, "integer")
  Bot.runCommand("/on_remove")
}
}
