/*CMD
  command: Bu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers", null)

Bot.sendMessage(
  "Broadcasting..\n\nTotal Broadcasted: 0\nTotal Users In Bot : " +
    fullBotUsers.length +"hi")
