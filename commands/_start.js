/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let userid = "" + user.telegramid + ""

//Your code here
var key = Bot.getProperty("YdpSocialHikeChannel");
let id = user.telegramid
Api.getChatMember({
  chat_id: key,
  user_id: id,
  on_result: "/isjoined"
})
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessage(
    "*🎉 You Were Referred  By: *" +
      "" +
      refUser.telegramid +
      ")"
  )
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*👤 New User On Your Refer link: *" + userid
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("* *")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ""
  var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(
    484675895,
    "*👤 New user*\nUser link = " +
      user_link +
      " \nUser id = " +
      user.telegramid +"\nUsername = @"+user.username+""
  )
}
User.setProperty("welco", user.telegramid, "text")


var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}

Bot.sendMessageToChatWithId(2016839211, "🚦New User🚦\n\n⚜ User = "+user.first_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+"\n📛 User Link = "+user.first_name+"");
