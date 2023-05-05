/*CMD
  command: setchan1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("YdpSocialHikeChannel",message, "params");
Bot.sendMessage("✅ Channel " +message+ " Has Been Set");
}else{
return
}

