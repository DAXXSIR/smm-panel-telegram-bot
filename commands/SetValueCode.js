/*CMD
  command: SetValueCode
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥 SET VALUE FOR CODE

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tt = options.myData
var Here = "[Here](https://t.me/socialmediakaboosterbot)"
if(message.includes("-")){
Bot.sendMessage("Negative value() Failed to Authorise")
return
}
Bot.sendMessage("Value for the code: " + tt + " has been set")
Bot.setProperty(tt, message)
Api.sendPhoto({
photo:"https://i.ibb.co/Qf8VwN1/file-137.jpg",
chat_id:"@PAISAWALAZ",
caption:"*🎉 New Redeem Code* : "+tt+" \n*• ━━━━━━━━━━━━━━━━━━━━━━ •*\n🔥 Amount : "+ message +"\n*• ━━━━━━━━━━━━━━━━━━━━━━ •*\n 🌟 Only For 1 Lucky User Redeemable Only "+Here+"\n*• ━━━━━━━━━━━━━━━━━━━━━━━━━━ •* ",parse_mode : "Markdown" , reply_markup: { inline_keyboard:[[{text:"🔖 REDEEM NOW ",url:"https://t.me/socialmediakaboosterbot"}]]}
})
