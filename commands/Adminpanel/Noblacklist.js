/*CMD
  command: Noblacklist
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: *Enter Tgid to Remove Blacklist?*
  keyboard: 
  aliases: 
CMD*/

var key=Bot.getProperty("admin_chat")
if (user.telegramid = key){
var tgID = message // any tgID for ban. You can pass it via message with wait for reply
var badUsers = Bot.getProperty("blacklisted", { list: {} })
badUsers.list[tgID] = false
// for unban:
// badUsers.list[tgID] = false;
Bot.setProperty("blacklisted", badUsers, "json")

Bot.sendMessage("*User with TG id*: `" + tgID + "` *Unblacklisted*")
}else{
Bot.sendMessage("")}
