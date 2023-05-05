/*CMD
  command: /turnon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.setProperty("management","on")
Bot.run({command: "Powersave"})
}else{
Bot.sendMessage("*You are not Admin or Mod*")}
