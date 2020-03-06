const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

exports.updateUser = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return res.status(400).json({
      status: 'fail',
      message: 'Contact admin'
    });
  }
  const filteredBody = filterObj(req.body, 'nickName', 'email');

  const user = await User.findByIdAndUpdate(
    '5e6140dca3ad5626a4273460',
    filteredBody,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    user
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate('5e617c47b11be42a5441f523', { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
});
