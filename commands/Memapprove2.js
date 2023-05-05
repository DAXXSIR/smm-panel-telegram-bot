/*CMD
  command: Memapprove2
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
    "https://telesubs.com/api/v2?key="78f4406b78d54adb09e8b18baddea5fe+
    Bot.getProperty("apikey") +
    "&action=add&service=1006&link=" +
    subs +
    "&quantity=" +
    bot10 +
    "",
  success: "Memapprovee2 " + subs + ""
})
}
