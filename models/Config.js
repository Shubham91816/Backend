const mongoose = require('mongoose');


const configSchema = new mongoose.Schema({
  configId: { type: String, required: true },
  data: { type: [[String]], required: true },
  remark: { type: String },

 
});

const YourModel = mongoose.model('configurations', configSchema);
module.exports = YourModel;
