/*CMD
  command: inslapprove1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
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
var res= Libs.ResourcesLib.userRes("balance")
let bot10 = User.getProperty("memamount")
let subs = User.getProperty("subs")
let answer = User.getProperty("answer")
if(res.value() < answer ){
var button = [[{title:"Deposit ✅",command:"Depo Menu"}]]

Bot.sendInlineKeyboard(button,

  "⚠️ _To Order You Need To Have_ "+answer+"$\n\n💵 _Your Balance: "+res.value()+"$_\n\n✅ _Deposit Now To Order_"

)
return
}else{
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key=" +
    Bot.getProperty("api") +
    "&action=add&service=15179&link=" +
    subs +
    "&quantity=" +
    bot10 +
    "",
  success: "inslapprovee " + subs + ""
})
}
