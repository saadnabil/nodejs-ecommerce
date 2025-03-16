const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dbConnection = require('./config/database')
const categoryRoutes = require('./routes/categoryRoutes')


dotenv.config();
 

/**Express app */
const app = express()

/**connect db */
dbConnection()


/**Middlewares */
if(process.env.NODE_ENV == "development"){
    app.use(express.json())
    app.use(morgan('dev'))
    console.log(`env mode ${process.env.NODE_ENV}`)
}

/**routes */
app.use('/api/v1/categories',categoryRoutes)



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on http://${process.env.HOST || 'localhost'}:${port}`)
})
