/*CMD
  command: depoapprove
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the currency

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="2016839211"){
Bot.sendMessage('u r not a admin')
return}
Bot.setProperty("curr", message, "string")
Bot.runCommand("Depocryp")
