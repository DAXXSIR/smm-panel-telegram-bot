/*CMD
  command: News
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send The *News!*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key= Bot.getProperty("admin_chat")
if (user.telegramid = key){
let time = new Date()
let hours = time.getDate()
Bot.setProperty(hours + "n", message)
Bot.sendMessage("https://t.me/YdpSocialHikeBot?start=" + hours + "n")
Api.sendMessage({
  chat_id: "@YdpSocialHikeChannel",
  text: "*🔊NEW NEWS*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "READ FULL NEWS",
          url: "https://t.me/YdpSocialHikeBot?start=" + hours + "n"
        }
      ]
    ]
  }
})
}else{
Bot.sendMessage("")}
