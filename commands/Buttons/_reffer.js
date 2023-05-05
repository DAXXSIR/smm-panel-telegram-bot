/*CMD
  command: /reffer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 📢 referrel
CMD*/

var refLis = Libs.ReferralLib.getRefList().getUsers()
var len = 0

if (refLis.length < 9) {
  len = refLis.length
} else {
  len = refLis.count
}
var reflink = Libs.ReferralLib.currentUser.getRefLink(bot.name, "BB-")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var bal = Libs.ResourcesLib.userRes("rebal")

Api.sendPhoto({
  photo: "https://ibb.co/5vtMx0Z", // it is picture!
  caption: "*⭐️ WORLD'S #1 CHEAPEST SOCIAL HIKE PANEL!*\n\n⚡️ *Increase membership for Telegram and Instagram and all Social Media with our robot at high speed 🔥\n\n🚀 Has an automatic add subscribers system\n👥 Share and earn free views\n🔐 Safe and 100% secure payment\n\n👇🏻 Get start in this wonderful robot right now*\n\n"+reflink+"",
parse_mode : "Markdown"})
Api.sendMessage({ text :   "<b>👆🏻 The banner above contains the link to invite you to the robot</b>\n\n<i>🎁 By inviting friends to the robot with your own link, you can receive 150 Post Views per person\n☑️ So by subscribing you can easily balance your account for free!  Increase.</i>\n\n<b>⚠️ Note : Fake refferel is forbidden, Share your link on groups or friend, your refferels will be checked if found fake you will not get free views\n\n💰 Balance : "+bal.value()+" post views</b>",
 parse_mode:"html",reply_markup: {inline_keyboard: [[{text: "✅ Claim Free Views",callback_data: "freeview"}]]}
}) 


