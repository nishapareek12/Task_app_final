const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{ 
useFindAndModify: false}
)


 



