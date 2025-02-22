const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  specialist: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialist', required: true },
  appointmentId: { type: String, required: true, unique: true },
  status: { type: String, default: 'pending' }, // pending, active, completed, cancelled
  events: [{
    event: String,
    timestamp: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
