// require('dotenv').config()
// const Application = require('./framework/Application')
// const requestRouter = require('./src/request-router')
// const jsonParser = require('./framework/parseJson')
// const parseUrl = require('./framework/parseUrl')

// const PORT = process.env.PORT || 5000

// const app = new Application()

// app.use(jsonParser)
// app.use(parseUrl('http://localhost:5000'))
// app.addRouter(requestRouter)

// const start = async () => {
//     try {
//         app.listen(PORT, () => console.log(`SERVER WORKING ON PORT: ${PORT}`))
//     } catch (error) {
//     console.log("server error", error); 
//     }
// }

// start()


//=========================new HTTPS
/// INDEX JS
require('dotenv').config();
const Application = require('./framework/Application'); // Обратите внимание на измененный путь
const requestRouter = require('./src/request-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const PORT = process.env.PORT || 5000;


const app = new Application();

app.use(jsonParser);
app.addRouter(requestRouter);
app.use(parseUrl('https://83-229-85-22.cloud-xip.com:5000'));


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER WORKING ON PORT: ${PORT}`));
    } catch (error) {
        console.log("server error", error);
    }
};

start();
