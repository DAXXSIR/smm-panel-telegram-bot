/*CMD
  command: /setup
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("801dD799fE504250A095da185c17b2f36F2ca5bE74dE7B3254d49df4bccb6580");
Libs.CoinPayments.setPublicKey('bc106d0e3a24e47e448b585ede6b99a00193ddf817a1a098a42eeb98e2229890');

// for Receiving Payments
// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('bABU_deo5vLGy3rGSY5vT1PThTXVCp7qsB4rPXBi');
