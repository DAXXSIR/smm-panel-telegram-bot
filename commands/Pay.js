/*CMD
  command: Pay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send The Full Transaction Link Which Starts From Https:// Otherwise Your Deposit Will Be Disapproved*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.setProperty("USERID", user.telegramid, "string")
Bot.setProperty("USERFIRST", user.first_name, "string")
Bot.setProperty("TRANSACTION", message, "string")
let msg = message
if (msg.length < 25) {
Bot.sendMessage("*This is Invalid Transaction Link, Send a Valid Link*")
Bot.runCommand("Pay")
}else{
Bot.sendMessage("*Done. It will not take more than 1 hour. You will receive a notification when the balance is added*")
var button=[[{title:"✅ Confirm",command:"depoapprove"},{title : "❌ Cancel" ,command : "depodis"}]]
Bot.sendInlineKeyboardToChatWithId(2016839211,button,"*User deposited through CoinPayment\n\nTranslation Id =* "+message+"\n*Name =* _"+user.first_name+"_\n🔰 *Username =* _@"+user.username+"_\n🆔 *User ID =* `"+user.telegramid+"`\n📛 *User Link =* ["+user.first_name+"](tg://user?id="+user.telegramid+")")}

