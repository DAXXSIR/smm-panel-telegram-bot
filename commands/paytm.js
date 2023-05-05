/*CMD
  command: paytm
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
var buttons = [[
    {title: "Back ↩️", command: "Depo Menu"},{title: "Deposit ✅", command: "paytm1"}],
];

Bot.sendInlineKeyboard(buttons,"*PAYTM DETAILS*\n\n`All Deposit Will Be Converted To USD Current Value`\n\n_Tap On Deposit To Add Funds_",{disable_web_page_preview: true})

