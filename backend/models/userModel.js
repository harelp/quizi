const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: [true, 'Enter a cool nick name!'],
    trim: true,
    maxlength: [20, 'NickName has more then 20 characters'],
    minlength: [1, 'NickName must be more than 1 character']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password should be more than 8 characters'],
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      // this only works on Save
      validator: function(el) {
        return el === this.password;
      },
      message: "Passwords doesn't match"
    }
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  totalPoints: {
    type: Number,
    default: 0
  },
  completed: {
    type: Number,
    default: 0
  },
  created: {
    type: Number,
    default: 0
  }
});

// mongoose hook to run function before saving the data/ manipulating data
userSchema.pre('save', async function(next) {
  // checks if the field password has modified or not
  if (!this.isModified('password')) return next();

  // npm i bcryptjs // to hash a password // 12 - cost for resource and creating powerfull
  // bcrypt.hash is async version
  this.password = await bcrypt.hash(this.password, 12);

  //delete confirmPassword because no need to save it on the db
  this.confirmPassword = undefined;
  next();
});

userSchema.pre(/^find/, function(next) {
  this.find({ active: true });
  next();
});

// instance method = which is available on all docs of the certain collection
//                                              password entered   pass in db
userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  // this. keyword is pointed to the coll
  // returns true or false with bcrypt inbuild function
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
