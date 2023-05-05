/*CMD
  command: /pkey
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

var button=[{title:"⬅️Return",command:"coins"}]
Bot.sendInlineKeyboard(button,"Send your new Private Key :\n\n*⚠️ Attention :*\n\n*Don't give your api keys to anyone*")
Bot.runCommand("/setp")
