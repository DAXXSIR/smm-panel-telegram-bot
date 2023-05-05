/*CMD
  command: /maintenanceoff
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

Bot.setProperty("maintenance" ,"off","string")
Bot.runCommand("/maintenance")
return

