/*CMD
  command: /transfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
var button=[{title:"⬅️Return",command:"/Panel"}]
Bot.setProperty("admin_chat", msg, "integer");
Bot.sendInlineKeyboard(button,"*🚨 Bot Admin Panel Transferred to user* " +message)
}else{
return
}

