const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    fruit : {
        type : String,
        required : true,
        trim : true
    },

    rate : {
        weight : {
        type : String,
        enum : ["1kg","2kg","5kg","10kg","50kg","100kg"],
        },

        dozen : {
            type : String,
            enum : ["0.5 dozen", "1 dozen", "2 dozen", "5 dozen"],
        }
    },

    price : {
     InRupees :{
      type :   Number,
      required : true,
      } ,
     InDollar :{
        type :   Number,
        required : true,
      }
    }
})

module.exports = mongoose.model('fruits', fruitSchema)