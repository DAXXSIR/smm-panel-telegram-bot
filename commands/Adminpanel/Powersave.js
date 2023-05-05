/*CMD
  command: Powersave
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Adminpanel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var key2 = [
  [
    { title: "✅ Turn On", command: "/turnon" },
    { title: "🛑 Turn OFF", command: "/turnoff" }
  ]
]
var k = Bot.getProperty("management")
Bot.sendInlineKeyboard(
  key2,
  "*Power saving mode is currently: *" +
    k +
    "\nYour Itrations: " +
    iteration_quota.progress
)
}else{
Bot.sendMessage("*You are not Admin or Mod*")}
