const { Schema, model } = require('mongoose');

const settingsSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: Schema.Types.Mixed,
    required: true
  }
}, { _id: false });

const modeSchema = new Schema({
  arm: {
    type: Boolean,
    required: true
  }
}, { _id: false });

// const stateSchema = new Schema({
//   mode: modeSchema,
//   settings: [{
//     type: Map,
//     of: settingsSchema
//   }]
// });

const stateSchema = new Schema({
  arm: {
    type: Boolean,
    required: true,
    default: false
  },
  settings: {
    compress: {
      type: Boolean,
      required: true,
      default: true
    },
    debug: {
      type: Boolean,
      required: true,
      default: false
    }
  }
});

module.exports = model('state', stateSchema);
