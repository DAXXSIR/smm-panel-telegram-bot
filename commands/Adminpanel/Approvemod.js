/*CMD
  command: Approvemod
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send user's *Tgid?*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid = key){
var tgID = message // any tgID for ban. You can pass it via message with wait for reply
var badUsers = Bot.getProperty("mods", { list: {} })
badUsers.list[tgID] = true

// for unban:
// badUsers.list[tgID] = false;

Bot.setProperty("mods", badUsers, "json")

Bot.sendMessage("*User with TG id:* `" + tgID + "` *Approved, to Access Panel*")
Bot.sendMessageToChatWithId(tgID,"*😍 You Have Been Approved, To Access Mod's Panel*")

// You can also use hard block
// It is save your iterations:
// Bot.blockChat(chat.id);

// But with this BeforeAll will be also not working
}else{
Bot.sendMessage("")}
