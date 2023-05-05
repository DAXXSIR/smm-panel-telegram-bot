/*CMD
  command: RemoveWhitelist
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: *Tgid to Remove Whitelist From?*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid = key){
var tgID = message // any tgID for ban. You can pass it via message with wait for reply
var badUsers = Bot.getProperty("whitelisted", { list: {} })
badUsers.list[tgID] = false
// for unban:
// badUsers.list[tgID] = false;
Bot.setProperty("whitelisted", badUsers, "json")

Bot.sendMessage("*User with TG id:* `" + tgID + "` *Unwhitelisted*")}
else{
Bot.sendMessage("You are not Admin or Mod")}
