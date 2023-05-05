/*CMD
  command: cb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Your Coinbase Full Name*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.setProperty("USERID", user.telegramid, "string")
Bot.setProperty("USERFIRST", user.first_name, "string")
Bot.setProperty("TRANSACTION", message, "string")
let msg = message
if (msg.length < 5) {
Bot.sendMessage("*This is Invalid Name, Send a Valid Name*")
Bot.runCommand("cb")
}else{
Bot.sendMessage("*Done. It will not take more than 1 hour. You will receive a notification when the balance is added*")
var button=[[{title:"✅ Confirm",command:"depoapprove"},{title : "❌ Cancel" ,command : "depodis"}]]
Bot.sendInlineKeyboardToChatWithId(2016839211,button,"*User deposited through CoinBase\n\nCoinBase Name =* "+message+"\n*Name =* _"+user.first_name+"_\n🔰 *Username =* _@"+user.username+"_\n🆔 *User ID =* `"+user.telegramid+"`\n📛 *User Link =* ["+user.first_name+"](tg://user?id="+user.telegramid+")")}

