/*CMD
  command: Reach 📊
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Service Name : Reel Impression + Reach + Profile Visits*

_Minimum Order : 25
Price : 0.005$ per 25_

`👇🏻 Enter the amount of reach you need`
  ANSWER
  keyboard: back ↩️
  aliases: 
CMD*/

User.setProperty("memamount", message,"string")
var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
Bot.runCommand("Members")
}else{
if(data.message < 25){
Bot.sendMessage("*Minimum Order Is 25*")
Bot.runCommand("Reel Reach 📊")
}else{
Bot.runCommand("ir")}}


