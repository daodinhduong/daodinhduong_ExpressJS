const Teacher = require(`${__dirname}/../models/teacherModel`);
exports.getAllTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      status: 'success',
      results: teachers.length,
      data: {
        teachers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createTeacher = async (req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newTeacher,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    res.status(201).json({
      status: 'success',
      data: {
        teacher,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runalidators: true,
    });

    res.status(201).json({
      status: 'success',
      data: {
        teacher,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: 'success',
      data: {
        teacher,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
