const axios = require('axios')
const  dotenv = require('dotenv').config()
const {Telegraf, Scenes, session} = require('telegraf')



const token = process.env.BotToken || null;
const bot = new Telegraf(token)




bot.start(async (ctx)=>{
    console.log('a new user interacted with the bot', ctx.from.first_name)
    const message = `Hello, ${ctx.from.first_name} ${ctx.from.last_name} \n\n Welcome to AckHub Bot`

    ctx.replyWithPhoto(
    {url: 'https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man-300x300.png'},

    {
        caption: message,
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Pay for class', callback_data: 'pay_class'},
                    {text: 'Test button', callback_data: 'test_button'}
                  ],
                  [
                    {text: 'Use coupon code', callback_data: 'coupon'},
                    {text: 'Check coupon code', callback_data: 'Check_coupon'}
                  ]
            ]
        }
    }
    )
})


bot.action('pay_class', async (ctx)=>{
    ctx.reply("You are about to pay for 3BD class")
    
})

bot.action('test_button', async (ctx)=>{
    ctx.reply('You just clicked the test button')

    ctx.reply('Hello there')
})





bot.launch()