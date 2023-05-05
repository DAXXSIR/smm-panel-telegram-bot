/*CMD
  command: /joined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ✅ joined
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
let id = user.telegramid
var key = Bot.getProperty("YdpSocialHikeChannel");
Api.getChatMember({
  chat_id: key,
  user_id: id,
  on_result: "/isjoined"
})
