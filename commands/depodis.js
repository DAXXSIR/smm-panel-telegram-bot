/*CMD
  command: depodis
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="2016839211"){
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
var USERID = Bot.getProperty("USERID")
var buttons = [[{title:"Deposit Again ✅",command:"Depo Menu"}]]
Bot.sendInlineKeyboardToChatWithId(USERID, buttons, "*❌ Your Deposit is Disapproved As You Have Not Made Any Payment to the Given Address*")
Bot.sendMessage("User Deposit Cancelled ❌")

