/*CMD
  command: ModsPanel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Mods Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👮‍♂️ mod's panel
CMD*/


if(user.telegramid!=2016839211){
Bot.sendMessage('u r not a admin')
return}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var key = 2016839211
if(user.telegramid == key){
var panel = [
    [{ title: "🔎 Check User Balance", command: "CheckUserBalance" }],
    [
      {
        title: "💎 Make redeem code",
        command: "/Makeredeemcode00"
      }
    ],
    [{ title: "⚠️ Send Balance", command: "/AddBalance2002" }],
    [{ title: "🔐 Ban User", command: "/BanUser" }],
    [{ title: "🔓 Unban user", command: "/UnbanUser" }]
,[{ title: "↩️Back", command: "/Account"}]
  ]
  Bot.sendInlineKeyboard(panel, "*Welcome to 👮‍♂️ Mod's Panel!*")
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
    { title: "🗣️Contact Support", url: "https://t.me/Rbggamer" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else
var mods= Bot.getProperty("mods", { list: {} })

if (mods.list[user.telegramid]) {
var panel = [
    [{ title: "🔎 Check User Balance", command: "CheckUserBalance" }],
    [
      {
        title: "💎 Make redeem code",
        command: "/Makeredeemcode"
      }
    ],
    [{ title: "⚠️ Send Balance", command: "AddBalance2002" }],
    [{ title: "🔐 Ban User", command: "/BanUser" }],
    [{ title: "🔓 Unban user", command: "/UnbanUser" }]
  ]
  Bot.sendInlineKeyboard(panel, "*Welcome to 👮‍♂️ Mod's Panel!*")
}else
Bot.sendMessage("*You are Not Admin or Mod 👮‍♂️*")
