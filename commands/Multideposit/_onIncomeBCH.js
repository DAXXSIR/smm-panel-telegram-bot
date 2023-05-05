/*CMD
  command: /onIncomeBCH
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Multideposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!options) {
  // for security we need to check that this command runned only by lib
  // user can not run command with options
  return
}
var key = Bot.getProperty("YdpSocialHikeChannel")
var currency = options.currency
var amount = options.amount

var fiat_amount = options.fiat_amount
var fiat_currency = options.fiat_coin

var txn_id = options.txn_id

// see another fields by
// Bot.sendMessage(inspect(options));

Bot.sendMessage(
  "*🤩 Your Funds Successfully Received :*" +"\n\n*Amount*:\n" +
    amount + " " +currency +" (" + fiat_amount +
    " " +fiat_currency +")" +"\n\n*⛓ Transaction Id:* `" +
    txn_id + "`\n\n*😎 Balance Added*: +" +amount * 5000 +" MiKiPoints 💎"
)

var res = Libs.ResourcesLib.userRes("balance")
res.add(amount * 5000)
Api.sendMessage({
  chat_id: key,
  text:
    "<b>" +
    "🥰 New Deposit From A User!!\n\n👤 User: " +
    " " +user.username +"\n\n💵 Amount : " +amount +" BCH" +"\n\n" +
    "💎 Gained: " +amount * 5000 +"MiKiPoints 💎\n\n⛓ Transaction ID: " + txn_id +
    "\n\n🤩 Buy Now Your Pro Bots And Codes Here "+"</b>",
  parse_mode: "html"
})
var bonus = amount * 100 * 0.4
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(+bonus)
  Bot.sendMessageToChatWithId(
    referrer.telegramid,
    "*➕ Referral Deposit: +* " + bonus.toFixed(5) + " *MikiPoints 💎*"
  )
}
var stat = Libs.ResourcesLib.anotherChatRes("active", "global")
var etm = User.getProperty("dep")
if (!etm) {
  stat.add(1)
  User.setProperty("dep", true)
}

