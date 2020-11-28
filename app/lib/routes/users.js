const { create, all, get, update } = require('./../db/users');
const { wrapError } = require('../helpers/err');

const createUserRoutes = (server) => {
  server.get('/api/user/:email', (req, res) =>
    wrapError(res, async () => {
      const result = await get({ email: req.params.email });
      res.json(result);
    })
  );
  server.get('/api/users', (req, res) =>
    wrapError(res, async () => {
      const result = await all();
      res.json(result);
    })
  );
  server.post('/api/user/create', (req, res) =>
    wrapError(res, async () => {
      const { firstName, lastName, email, password } = req.body;
      const createRes = await create({ firstName, lastName, email, password }).catch((e) => e);
      if (createRes.affectedRows === 1) {
        console.log(createRes);
        const newUser = await get({ email });
        res.json(newUser);
      }
      res.status(500).json({ message: 'User with that email already exists!' });
    })
  );
  server.post('/api/user/update', (req, res) =>
    wrapError(res, async () => {
      const { oldPassword, newPassword, email } = req.body;
      const updatedUser = await update({ email, newPassword, oldPassword });
      res.json(updatedUser);
    })
  );
};

module.exports = {
  createUserRoutes,
};
