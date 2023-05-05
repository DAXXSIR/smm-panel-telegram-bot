/*CMD
  command: /onDOGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
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
var wallet = options.result.address;
var button=[{title:"↩️Back",command:"/deposit"}]
Bot.sendInlineKeyboard(button,"⚠️ _If you send less than 1 DOGE, your deposit will be igonred!_\n\n_All deposits will be converted to USD Current Value_\n\n✅* Send the amount you want to deposit to the following address:*\n\n`" + wallet + "`")
User.setProperty("depowalldoge",wallet,"string")

