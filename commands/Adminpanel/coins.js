/*CMD
  command: coins
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
if (user.telegramid == key){
var key = [[{title:"🔐 Private Key",command:"/pkey"},{title:"🔒 Public Key",command:"/pukey"}],[{title:"🏤 Live Balance",command:"/FF"}],[{title:"⬅️Return",command:"/Panel"}]]

Bot.sendInlineKeyboard(key,"*Welcome here*, You can Manage your Coinpayemnts Api Keys")
}else{
return
}
