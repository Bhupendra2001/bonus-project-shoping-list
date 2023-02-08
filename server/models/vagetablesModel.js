const mongoose = require('mongoose')

const vegeSchema = new mongoose.Schema({
    vegetable : {
        type : String,
        required : true,
        trim : true
    },

    rate : {
        weight : {
        type : String,
        enum : ["500gm","1kg","2kg","5kg","10kg","50kg","100kg"],
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

module.exports = mongoose.model('vegetables', vegeSchema)