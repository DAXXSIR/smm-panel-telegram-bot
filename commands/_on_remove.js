/*CMD
  command: /on_remove
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

var admin = Bot.getProperty("adminID")

if (admin == user.telegramid) {
if (message == "Back 🔙") {
  Bot.runCommand("/panel2002");
}else{
var amount = parseFloat(message);
var id = User.getProperty("id");
var res = Libs.ResourcesLib.anotherUserRes("balance", id);
res.add(-parseFloat(amount));
Bot.sendMessage("*Succesfully Removed Balance* \n👤 User: "+id+"\n💎 Amount - "+amount+" YDP 💎");

Bot.sendMessageToChatWithId(id,""+amount+" BBT💎\nRemoved From Balance")
}
}
