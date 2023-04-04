const express = require('express');
const teacherController = require(`${__dirname}/../controllers/teacherController`);
const router = express.Router();
router
  .route('/')
  .get(teacherController.getAllTeacher)
  .post(teacherController.createTeacher);

router
  .route('/:id')
  .get(teacherController.getTeacher)
  .patch(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);
module.exports = router;
