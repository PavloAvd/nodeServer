const axios = require('axios')

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
        // console.log(response.data);
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
        console.log("Set Data METHOD");
        console.log("Request data", req.body);
        // console.log("Request endpoint", req.params.endpoint);
        console.log("response", response.data.response);
        res.send( response.data.response)
    } catch (error) {
        res.send("poster post error", error.data)
    }



    // res.send(response.data);
}

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
    getData, setData, getProduct, getUser
}

