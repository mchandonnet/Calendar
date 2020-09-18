const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventNotes: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: false
  },
  endTime: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)
