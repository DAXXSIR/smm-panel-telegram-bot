/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: mail

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 2016839211){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Bhat Madharchod Scammer ki aulad")
}
