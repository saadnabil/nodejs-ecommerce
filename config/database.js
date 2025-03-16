const mongoose = require('mongoose')


/**DB connection */
const dbConnection = () => {
    mongoose.connect(process.env.DB_URI).then((conn)=>{
        console.log('DB connected successfully')
    }).catch((err) => {
        console.log(`DB error ${err}`)
        process.exit(1);
    });
}

module.exports = dbConnection;



