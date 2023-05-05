/*CMD
  command: /setp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
Bot.sendMessage("✅ Done: Your New Private Key is\n "+"`"+message+"`");
Bot.setProperty("Prkey" , message,"string")
}else{
return
}
