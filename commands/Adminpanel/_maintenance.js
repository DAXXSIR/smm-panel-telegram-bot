/*CMD
  command: /maintenance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var key2 = [[{title:"✅ Turn On",command:"/maintenanceon"},{title:"🛑 Turn OFF",command:"/maintenanceoff"}]]
var k = Bot.getProperty("maintenance")
Bot.sendInlineKeyboard(key2,"*Management Mode is Currently: *" +k)}
else{
Bot.sendMessage("")}
