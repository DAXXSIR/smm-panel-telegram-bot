/*CMD
  command: /account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👤 account
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var email = User.getProperty("email","`Not Set`")
var balance = Libs.ResourcesLib.userRes("balance")
var level = Libs.ResourcesLib.userRes("level")
var num = Libs.ResourcesLib.userRes("num")
var num2 = Libs.ResourcesLib.userRes("codesnum")
var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var button=[[{title : "📧 Set Email " , command : "/setmail"},{title : "➕ Deposit" , command : "Depo Menu"}],
[{title:"🤓 Ping Admin",command:"/message"},{title : "🎁 Gift Card " , command : "/buygift"}],
[{title : "🙍‍♂️ Admin Panel " , command : "/Panel"},{title : "👮‍♂️ Mod's Panel " , command : "ModsPanel"}]]
Bot.sendInlineKeyboard(
  button,
  "*👤 Your Details* \n\n*👤 Name*: `" +
    user.first_name +
    "`\n*🎟User ID*: `" +
    "" +
    user.telegramid +"` " + 
     "\n*🥇 Level Completed:* `" +
    level.value() +
    "`\n\n*💵 Balance*: `" +
    balance.value().toFixed(5) +
    " YDP 💎`"+
    "\n\n*📧 Email*: `" +
    email +
    "`\n*🤖 Total Bots Ordered:* `"+num.value()+" Bots`\n*📚 Total Codes Ordered:* `"+num2.value()+" Codes`")
return
}else
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
    { title: "🗣️Contact Support", url: "https://t.me/yung92" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else

var button=[[{title : "🤓 Ping Admin" , command : "/message"},{title : "➕ Deposit" , command : "Depo Menu"}]]
//
Bot.sendInlineKeyboard(
  button,
  "*👤 Your Account* \n\n*👤 Name*: `"+user.first_name +"`\n*🎟User ID*: `"+user.telegramid +"`\n\n*💵 Your Balance*: `" +balance.value().toFixed(5) +"`$\n\n*🛒 Your Total Orders: *"+num.value()+"")
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}


