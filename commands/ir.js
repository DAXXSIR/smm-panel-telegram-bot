/*CMD
  command: ir
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.0006
User.setProperty("answer", answer,"string")
Bot.sendMessage("💰 Order Charge : "+answer+"\n\n👇🏻 *Send your Channel/Group link :*\n\n⚠️ `Note` : _Send only link if you send username your order will be cancelled and price will be deducted._")
Bot.runCommand("irapprove")
