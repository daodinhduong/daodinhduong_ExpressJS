const mongoose = require('mongoose');
// const slugify = require('slugify');

const teacherSchema = new mongoose.Schema({
  teacherID: {
    type: String,
    required: [true, 'A teacher must have a id'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'A teacher must have a name'],
    unique: true,
    maxlength: [
      40,
      'A teacher name must have less or equal then 40 characters',
    ],
  },
  isWorking: {
    type: Boolean,
    default: false,
  },
  isTraining: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, 'A teacher must have a email'],
    unique: true,
    maxlength: [
      40,
      'A teacher email must have less or equal then 40 characters',
    ],
  },
  phone: {
    type: String,
    required: [true, 'A teacher must have a phone number'],
    unique: true,
  },
  deparment: {
    type: String,
    required: [true, 'A teacher must have a deparmant'],
  },
  subjects: {
    type: String,
    required: [true, 'A teacher must have a subject'],
  },
  roomManage: {
    type: String,
    required: [true, 'A teacher must have a subject'],
  },
});
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
