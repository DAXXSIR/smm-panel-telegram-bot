/*CMD
  command: Depocryp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the amount in crypto

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="2016839211"){
Bot.sendMessage('u r not a admin')
return}
Bot.setProperty("cryp", message, "string")
var button=[[{title:"Coinpayment",command:"Depoadd"},{title : "Coinbase" ,command : "depocb"}]]
Bot.sendInlineKeyboardToChatWithId(2016839211,button,"*Select The Currency Address You Want To Show On Channel*")

if(user.telegramid!="2016839211"){
Bot.sendMessage('u r not a admin')
return}
Bot.setProperty("cryp", message, "string")
var button=[[{title:"Coinpayment",command:"Depoadd"},{title : "Coinbase" ,command : "depocb"}]]
Bot.sendInlineKeyboardToChatWithId(2016839211,button,"*Select The Currency Address You Want To Show On Channel*")

