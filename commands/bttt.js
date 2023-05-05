/*CMD
  command: bttt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}


Api.sendPhoto({
  photo: "https://ibb.co/6DhHJSt", // it is picture!
  caption: "⚠️ _If you send less than 30 BTT, your deposit will be igonred!_\n\n*All deposits will be converted to USD Current Value*\n\n✅* Send the amount you want to deposit to the following address:*\n\n`TGAfqW6aSAxEGZHrf4Fy5ohWhQKoDdW1Yx`",
parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [
    [
      { text: "PAID ✅", callback_data: "Pay" },{text: "BACK ↩️", callback_data: "/deposit" }
    ]]}
});

