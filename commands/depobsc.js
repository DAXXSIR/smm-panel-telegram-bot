/*CMD
  command: depobsc
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
var curr = Bot.getProperty("curr")
var bot = Bot.getProperty("Bot")
var key = Bot.getProperty("channel")
var USERFIRST = Bot.getProperty("USERFIRST")
var TRANSACTION = Bot.getProperty("TRANSACTION")
var USERID = Bot.getProperty("USERID")
var cryp = Bot.getProperty("cryp")
var stat = Libs.ResourcesLib.anotherChatRes("active", "global")
  stat.add(1)

Api.sendMessage({
  chat_id: key,
  text:
    "*🥰 New Deposit*\n\n*👤 User*: " +" "+
     USERFIRST +"\n\n*💵 Amount* : " +cryp + "* "+curr+"*\n\n*⛓ Transaction ID: *" + "\n["+ TRANSACTION + "]" +"(https://bscscan.com/tx/" +TRANSACTION+ "\n)" + 
    "\n\n*🤩 Buy Now Your Pro Bots And Codes Here ⬇️:*"+bot+"",parse_mode : "Markdown" , disable_web_page_preview: true
})
