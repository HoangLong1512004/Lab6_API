const mongoose = require('mongoose');

const local = "mongodb+srv://hoanglong1512004:VuongChiLong@cluster0.puka1aw.mongodb.net/Lab3";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
