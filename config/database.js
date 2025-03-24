const mongoose = require('mongoose')


/**DB connection */
const dbConnection = () => {
    mongoose.connect(process.env.DB_URI).then((conn)=>{
        console.log('DB connected successfully')       
    });
}
module.exports = dbConnection;



