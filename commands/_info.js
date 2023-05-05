/*CMD
  command: /info
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


var key = Bot.getProperty("YdpSocialHikeChannel")
var bot = Bot.getProperty("YdpSocialHikeBot")
var result = JSON.parse(content)
var count = result.start_count
var status = result.status
var remains = result.remains
var order = options.order
var subs = options.subs
var id = options.id
let optio = { disable_web_page_preview: true, parse_mode: "Markdown"}

  Bot.sendMessage("*Your Order ID* `"+id+"` ✅\n\n*🔗 Link : "+subs+"*\n📈 *Quantity :* `"+order+"`\n🧾 *Remains* : " +remains +"\n✅ *Status* : " +status +"\n\n*😊 Thanks Order Again ❤️*", optio
)

Api.sendMessage ({chat_id: key, text: "✅ *Order ID* `"+id+"`\n\n📈 Quantity: `"+order+"`\n🧾 Remains : `"+remains +"`\n🔢 Start count : `"+count+"`\n✅ Status : *" +status +"*\n\n*🤩 Grow Your Social Platforms\nFrom Here ➡️ "+bot+"*",
parse_mode: "Markdown",disable_web_page_preview: true
})
