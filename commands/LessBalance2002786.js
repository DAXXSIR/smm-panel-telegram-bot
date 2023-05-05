/*CMD
  command: LessBalance2002786
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the amount to less

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid!="2016839211"){
Bot.sendMessage('u r not a admin')
return}
let amount = parseFloat(message)
let value = message
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })

  return
} else res.add(parseFloat(-amount))
Bot.sendMessage(
  "*The amount " +
    amount +
    " BP 💎 has been removed from the User ID: * " +
    tgid +
    " * Balance*"
)

Api.sendMessage({
  chat_id: "484675895",
  text:
    "*@" +
    request.chat.username +
    " Sent: " +
    message +
     " BP\n To User tgid: *" +
    options.tgid,
  parse_mode: "markdown"
})
//You need to send amount after

