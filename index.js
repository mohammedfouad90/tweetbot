var twit = require('twit')

var bot = new twit({
  consumer_key: process.env.TESTBOT_CONSUMER_KEY,
  consumer_secret: process.env.TESTBOT_CONSUMER_SECRET,
  access_token: process.env.TESTBOT_ACCESS_TOKEN,
  access_token_secret: process.env.TESTBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60000
})

bot.post('statuses/update', {status: 'rise to the full dignity demanded by your sentience.'}
    , function (err, data, response) {
      if (err) {
        console.log(err)
      } else {
        console.log(data.text + 'tweeted ya prince')
      }
    })
