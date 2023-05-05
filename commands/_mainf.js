/*CMD
  command: /mainf
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: back ⏪
CMD*/

var mods = Bot.getProperty("mods", { list: {} })
if (mods.list[user.telegramid= 2016839211]) {
Bot.sendKeyboard("📣 New Orders,🔎 Track Orders\n👤 Account,🎫 Ticket,➕ Add Funds\n💹 Stats,📢 Referrel","*  Welcome to "+bot.name+"!🔥*\n\nThis")
return
}else{
Bot.sendKeyboard("🔎 Track Orders,📣 New Orders\n👤 Account,🎫 Ticket,➕ Add Funds\n💹 Stats,📢 Referrel\n🍁 Redeem Code","*  Welcome to "+bot.name+"!🔥*\n\nHike up your brand & engage better with people across social media. SocialHike makes social media for startups easy.\n\n🚨*Don't pay money for this demo Bot*")
Bot.runCommand("refu")
}
var referbonus = User.getProperty("referbonus")

if (referbonus == undefined) {
    let refUser = Libs.ReferralLib.currentUser.attractedByUser()
    if (refUser) {
      var balanceref = Libs.ResourcesLib.anotherUserRes(
        "rebal",
        refUser.telegramid
      )
      balanceref.add(150)
      Bot.sendMessageToChatWithId(
        refUser.chatId,
        "🥳 You Earned 150 Free Views, Share Your Refferel Link More  \n*New User :* " +
          "[" +
          user.telegramid +
          "]" +
          "(" +
          "tg://user?id=" +
          user.telegramid +
          ")"
      )
      User.setProperty("referbonus", user.telegramid, "integer")
    }
  }
