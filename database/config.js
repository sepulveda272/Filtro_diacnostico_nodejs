const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error('la database esta paila');
    }
}

module.exports = {
    dbConnection
}