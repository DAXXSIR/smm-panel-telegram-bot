/*CMD
  command: /updates
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: ☄️ updates
CMD*/

var x = Bot.getProperty("About","`😣 No updates`")
var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage(""+x+"")
 return
} else 
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
    "*😌 Sorry*, The Bot is currently *🛠 Under Maintenance,*\n    🤘 _Please wait it may take up to 1-12 Hour_.")
  return
} else
var ban = Bot.getProperty(user.telegramid + "ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/MichealAwuah" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else
var x = Bot.getProperty("About","`😣 No updates`")
Bot.sendMessage(""+x+"")
