/*CMD
  command: /whitelist
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: *Enter user's Tgid to whitelist?*
  keyboard: 
  aliases: 
CMD*/

var key= Bot.getProperty("admin_chat")
if (user.telegramid = key){
var tgID = message // any tgID for ban. You can pass it via message with wait for reply
var badUsers = Bot.getProperty("whitelisted", { list: {} })
badUsers.list[tgID] = true
// for unban:
// badUsers.list[tgID] = false;
Bot.setProperty("whitelisted", badUsers, "json")

Bot.sendMessage("*User with TG id: *`" + tgID + "` *Whitelisted*")
}else{
Bot.sendMessage("*You are not Admin or Mod*")}
