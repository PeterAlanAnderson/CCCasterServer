const bcrypt = require('bcrypt');

exports.authenticateUser = (req, res) => {
  const user = users.find((user) => (user.userName = req.body.userName));
  if (!user) {
    return res.status(400).send('WE AINT FOUND SHIT');
  }
  try {
    bcrypt.compare(req.body.password, user.hashedPassword).then((same) => {
      if (same) {
        res.send('USER IDENTIFIED');
      } else {
        res.status(401).send('DENIED');
      }
    });
  } catch {
    res.status(500).send();
  }
};

const users = [
  { userName: 'jimtester', hashedPassword: '$2b$10$Bz8apj.ICrNglsHfBt7UgeX1XvynEY7A3ZZvMBJCG6LuGl/Cn9/my' },
];
// jimtester, test123

// THIS CODE IS FOR GENERATING SALTED PASSWORDS
// bcrypt.genSalt().then((salt) => {
//   bcrypt.hash(req.body.password, salt).then((hashedPassword) => {
//     console.log(hashedPassword);
//     res.status(201).send(`username: ${req.body.userName}, password: ${hashedPassword}`);
//   });
// });
