/*CMD
  command: /deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
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
    "*😌 Sorry*, The Bot is currently *🛠 Under Maintenance,*\n    🤘 _Please wait it may take up to 1-12 Hour_.")
  return
} else
var ban = Bot.getProperty(user.telegramid + "ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/yung92" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else
var state = Bot.getProperty("Deps")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System Is Currently OFF* ")
  return
} else
var key = [[{title:"♻️Deposit Prices Info♻️",command:"/depoinfo"}],[{title:"TRX",command:"trxx"},{title:"DOGE",command:"dogee"},{title:"BTC",command:"btcc"}],[{title:"LTC",command:"ltcc"},{title:"XRP",command:"xrpp"}],[{title:"ETH",command:"ethh"},{title:"BCH",command:"bchh"},{title:"BNB",command:"bnbb"}],[{title:"BTT",command:"bttt"},{title:"BSC",command:"bscc"}],[{title:"USDT",command:"usdtt"},{title:"DASH",command:"dashh"},{title:"ZEC",command:"zecc"}],[{title:"Back ↩️",command:"Depo Menu"}]]

Bot.sendInlineKeyboard(key,"*👋 Welcome!*\n_Here You Can Add Funds To Your Balance!_\n\n➕ *Select Deposit Currency*, All deposits will be converted to *USD Current Value*")

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}


