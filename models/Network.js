const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NetworkSchema = new Schema({
  networkName: {
    type: String,

  },
  zone: {
    type: String,

  },

  relayNetwork: [
    {
        relayNetworkName:{
        type: String,
        required: true
    },
    sensor:{
        type: String,
        required: true
    },
    batterytype:{
        type: String,
        required: true
    },


    batteryampere:{
        type: String,
        required: true
    },
    

    UpperVoltageThreshold:{
        type: Number,
        required: true
    },
    LowerVoltageThreshold:{
        type: Number,
        required: true
    },
   
    
    
    
    

   
  }
]



,


  


});




module.exports = Network = mongoose.model("Network", NetworkSchema);
