/*CMD
  command: /Panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Adminpanel

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
var key = Bot.getProperty("admin_chat")
if(user.telegramid ==key){
var panel = [
    [
      { title: "🔎 Check User Balance", command: "CheckUserBalance" },
      {
        title: "💎 Make Redeem Code",
        command: "/Makeredeemcode00"
      }
    ],
    [{ title: "⚠️ Remove Balance", command: "LessBalance2002786" },{ title: "⚠️ Send Balance", command: "/AddBalance" }],
    [
      { title: "🔐 Ban User", command: "/BanUser" },
      { title: "🔓 Unban user", command: "/UnbanUser" }
    ],
    [{ title: "🔎 Check Seller's solds", command: "/CheckSoldsSell" }],
    [{ title: "📥 Deposit Mode ", command: "/depostop" }],
    
    [
      { title: "🔋Power Saving", command: "Powersave" },
      { title: "⚠️ Maintanence Mode", command: "/maintenance" }
    ],
    [{ title: "🗞️ Set News", command: "/Setnews" }],
    [
      { title: "⤴️ Seller Approve", command: "SellerApprove" },
      { title: "⤵️ Seller Disapprove", command: "Sellerdisapprove" }
    ],
    [
      { title: "🧔 Add moderator", command: "Approvemod" },
      { title: "🧔 Moderator Disapprove", command: "Disapprovemod" }
    ],
    [{ title: "🤖 Set Bot", command: "Setbot" },{ title: "👛 Set Channel", command: "setchannel" }],
    [{ title: "🔮 Coinpayments", command: "coins" }],
    [{ title: "🔊 Broadcast", command: "broadcast" },{title:"👤 Private Message",command: "/private"}],
    [{title:"🛎 Check Illiteration status",command: "illiteration"}],
   [{ title: "🕹Transfer Admin Panel", command: "transferpanel"},{title: "➡️ Forward To channel", command: "fowardmgs" }],
    [{ title: "◻️ Add Whitelist", command: "/whitelist" }],
    [{ title: "◻️ Revoke Whitelist", command: "RemoveWhitelist" }],
    [{ title: "◼️ Add Blacklist", command: "Addblacklist" }],
    [{ title: "◼️ Remove Blacklist", command: "Noblacklist" }],[{ title: "↩️Back", command: "/Account"}]
  ]
  Bot.sendInlineKeyboard(panel, "*Welcome to creator's Panel!*")
} else 
Bot.sendMessageToChatWithId(key,"*#AutoBan\nA User is entering your creator panel without permission*.\n*Use* /BanUser *to Ban The User*\n*🍰User id: *"+user.telegramid)




