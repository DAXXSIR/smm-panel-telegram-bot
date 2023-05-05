/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: support
  answer: Input *Message*:
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid

var msg = message
var b = [
    [
      {
        title: "Reply to Admin ",
        command: "/support"
      }
    ]
  ]
  Bot.sendInlineKeyboardToChatWithId(
    tgid,
    b,
    "*📩 New Support Message*\n*From Admin:*" + "\n*Message:* " + msg
  )
Bot.sendMessage("*Message Was Sent:*\n"+msg+"")
