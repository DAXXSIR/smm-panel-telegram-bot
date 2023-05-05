/*CMD
  command: Setbot
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

var admin = Bot.getProperty("admin_chat")
if(user.telegramid!=admin){
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
Bot.sendMessage("📦*Send Bot Username with @:*Example: @yung92")
Bot.runCommand("/setbot")

