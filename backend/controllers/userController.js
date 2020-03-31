const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateUser = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return res.status(400).json({
      status: 'fail',
      message: 'Contact admin'
    });
  }
  const filteredBody = filterObj(
    req.body,
    'nickName',
    'email',
    'totalPoints',
    'completed',
    'created'
  );

  // console.log(req.body.userId);
  const user = await User.findByIdAndUpdate(req.body.userId, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    user
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.params.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
});

// exports.getAllUsers = catchAsync(async (req, res) => {
//   const users = await User.find();
//   res.status(200).json(users);
// });
