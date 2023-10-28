const axios = require('axios');
// const { response } = require('express');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const getData = async (req, res) => {
    try {
        const url = req.params.endpoint
        const response = await axios.get(url, {
            params: {
                "token": process.env.TOKEN

            }
        })
        console.log("Get Data METHOD");
        console.log(url);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        res.send(error)
    }

}

const setData = async (req, res) => {
    try {
        const url = req.params.endpoint
        const data = req.body
        const response = await axios.post(url, data, {params: {
            "token": process.env.TOKEN
        }})
        
        // console.log("Set Data METHOD");
        // console.log("Request data", req.body);

        res.send(response.data.response)
        res.send(teleresp)
    } catch (error) {
        // res.send(error.message)
        // res.send(response.data.response)
        console.log("errrrooooorrrr", error.message);
    }



    // res.send(response.data);
}
const sendTelegram = async (req, res) => {
    try {
        const data = req.body
        const text = ` 
        Телефон: ${data.phone}
        Спосіб отримання: ${data.delivery}
        Адреса доставки: ${JSON.stringify(data.adress)}
        Товари: ${data.productsTelegram}
        Коментар: ${data.comment} 
        
        `
        const teleresp = await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, `Нове замовлення: ${text}`)
        console.log("telegram", data);
        res.send(teleresp)
    } catch (error) {
        res.send(error.message)
        console.log("errrrooooorrrr", error.message);
    }
}
//  ${JSON.stringify(data) }
const getProduct = async (req, res) => {
    try {
        const url = req.params.endpoint
        const response = await axios.get(url, {
            params: {
                "token": process.env.TOKEN

            }
        })
        console.log("Get Data METHOD");
        console.log(url);
        console.log(response);
        res.send(response.data);
    } catch (error) {
        res.send(error)
    }

}
const getUser = async (req, res) => {
    try {
        const url = req.params.endpoint
        const response = await axios.get(url, {
            params: {
                "token": process.env.TOKEN,
                "phone": req.params.phone

            }
        })
        console.log("Get user METHOD");

        console.log(response);
        res.send(response.data);
    } catch (error) {
        res.send(error)
    }

}

module.exports = {
    getData, setData, getProduct, getUser, sendTelegram
}

