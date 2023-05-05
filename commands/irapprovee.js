/*CMD
  command: irapprovee
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  Bot.sendMessage("Internal Server Error")
  return
}
if (!params) {
  Bot.sendMessage("Internal Server Error")
  return
}

var result = JSON.parse(content)
var id = result.order
let bot10 = User.getProperty("memamount")
let subs = User.getProperty("subs")
let answer = User.getProperty("answer")

Bot.run({
command : "Completed1",
run_after : 20,
options: { order: bot10 ,subs : subs, answer: answer,id :id}
});

var stat = Libs.ResourcesLib.anotherChatRes("bots", "global")
var level = Libs.ResourcesLib.userRes("level")
var key = Bot.getProperty("channel")
var bot = Bot.getProperty("Bot")
var key = Bot.getProperty("channel")
var num = Libs.ResourcesLib.userRes("num")
var balance = Libs.ResourcesLib.userRes("balance",email)
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")"
var res= Libs.ResourcesLib.userRes("balance")
var email = User.getProperty("email")
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
    { title: "🗣️Contact Support", url: "https://t.me/MichealAwuah" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
return
}else
if(res.value() < answer ){
var button = [[{title:"Deposit ✅",command:"Depo Menu"}]]

Bot.sendInlineKeyboard(button,

  "⚠️ _To Order You Need To Have_ "+answer+"$\n\n💵 _Your Balance: "+res.value()+"$_\n\n✅ _Deposit Now To Order_"

)
return
}else{
balance.add(-answer)
num.add(1)
level.add(1)
var bots = User.getProperty("bots")
if (!bots) {
  stat.add(1)
}
}

  let options = { disable_web_page_preview: true, parse_mode: "Markdown"};

Bot.sendMessage("*Your Order Has Been Submitted and Processing\n\nOrder Details :\nℹ️ Order ID :* `"+id+"`\n*🔗 Link : "+subs+"*\n💰 *Order Price :* `"+answer+"$`\n*📊 Reach Ordered :* `"+bot10+"`\n\n*😊 Thanks for ordering\nCheck Your Order Status Here @SocialHikee*", options)

Api.sendMessage ({chat_id: key, text: "✅ *New Order Recieved by "+user.first_name+"*\n\nℹ️ Order ID : `"+id+"`\n✨ Service : *📊 Instagram Impression + Reach*\n📈 Quantity : `"+bot10+"`\n💰 Order Charge : `"+answer+"$` \n🔗 Link : "+subs+"\n\n🤩 *Grow Your Social Platforms\nFrom Here ➡️ "+bot+"*",
parse_mode: "Markdown", disable_web_page_preview: true
})
