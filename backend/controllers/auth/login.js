const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const path = require('path');
const dotenv = require('dotenv');

// load config
const configPath = path.join(__dirname, '..', '..', '..', 'config', '.env');
dotenv.config({ path: configPath });

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const payload = {
    id: user._id,
  };

  console.log(payload);

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    email: user.email,
    name: user.name,
  });
};

module.exports = login;
