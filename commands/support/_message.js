/*CMD
  command: /message
  help: 
  need_reply: 
  auto_retry_time: 
  folder: support
  answer: 
  keyboard: 
  aliases: 🎫 ticket
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var key =Bot.getProperty("admin_chat")
if(user.telegramid == key){
Bot.sendMessage("*📞 You are now in direct contact with our Administrator*\n_You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!_")
Bot.runCommand("/mess1")
  return
} else
var k = Bot.getProperty("management")
if (k == "on") {
  Api.sendPhoto({
    photo: "https://imbt.ga/0qL1iJuryt",
    caption:
      "<b> We are currently Saving power, Please use this command after some Hours</b>",
    parse_mode: "HTML"
  })

  return
} else var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*😌 Sorry*, The Bot is currently 🛠 *Under Maintenance*\n_🤘 Please wait it may take up to 1-12 Hour._")
  return
} else
Bot.sendMessage("*📞 You are now in direct contact with our Administrator*\n_You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!_")
Bot.runCommand("/mess1")








