require('dotenv').config()
const restify = require('restify')
const { BotFrameworkAdapter } = require('botbuilder')
const axios = require('axios')

const adapter = new BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword
})

adapter.onTurnError = async (context, error) => {
  console.error(`[onTurnError]: ${error}`)
  await context.sendActivity('Oops. Something went wrong!')
}

let server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log(`Bot Started, ${server.name} listening to ${server.url}`)
})

server.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async (context) => {
    if (context.activity.type === 'message') {
      const userText = context.activity.text
      try {
        // Translate to Spanish as example
        const response = await axios.post('https://libretranslate.de/translate', {
          q: userText,
          source: 'en',
          target: 'es'
        }, {
          headers: { accept: 'application/json' }
        })

        const translated = response.data.translatedText
        await context.sendActivity(`Translated: ${translated}`)
      } catch (e) {
        await context.sendActivity('Translation failed.')
      }
    }
  })
})
