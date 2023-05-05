/*CMD
  command: /onIncome
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

if (!options) {
  // for security we need to check that this command runned only by lib
  // user can not run command with options
  Bot.sendMessage("*LOL! Don't try to cheat me!*")
  return
}

Bot.sendMessage("*Payment Detected..*.")
// anybody can run /onIncome command!

if (!options) {
  // for security we need to check that this command runned only by lib
  // user can not run command with options
  return
}
var key = Bot.getProperty("YdpSocialHikeChannel")
var currency = options.currency
var amountt = options.amount
var amount = options.amount*1

var fiat_amount = options.fiat_amount
var fiat_currency = options.fiat_coin

var txn_id = options.txn_id
var bot = Bot.getProperty("YdpSocialHikeBot")
var info = +user.first_name +
//Bot.sendMessage("Payment detected🤓\nAdded to balance, MP: " + amount )
Bot.sendMessage(
  "*🤩 Your Funds Successfully Received :*" +
    "\n\n*💵 Amount*: " + amount + " " + currency +
    " (" +fiat_amount +" " +fiat_currency +")" +
    "\n\n*⛓ Transaction Id:* `" +txn_id +
    "`\n\n*😎 Balance Added:* +" +fiat_amount +"* USD*")

var res = Libs.ResourcesLib.userRes("balance")
res.add(+fiat_amount)
var level = Libs.ResourcesLib.userRes("level")
level.add(1)
Api.sendMessage({
  chat_id: key,
  text:
    "*🥰 New Deposit*\n\n*👤 User*: " +" "+
     info +"\n\n*💵 Amount* : " +amountt + "* TRX*\n\n*⛓ Transaction ID: *" + "\n["+ txn_id + "]" +"(https://tronscan.org/#/transaction/" +txn_id+ "\n)" + 
    "\n\n*🤩 Grow Your Social Platforms From ⬇️:*"+bot+"",parse_mode : "Markdown" , disable_web_page_preview: true
})
var bonus = amount * 0.4
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(+bonus)
  Bot.sendMessageToChatWithId(
    referrer.telegramid,
    "*➕ Referral Deposit: +* " + bonus.toFixed(2) + " *YDP 💎*"
  )
}
var stat = Libs.ResourcesLib.anotherChatRes("active", "global")
var etm = User.getProperty("dep")
if (!etm) {
  stat.add(1)
  User.setProperty("dep", true)
}

