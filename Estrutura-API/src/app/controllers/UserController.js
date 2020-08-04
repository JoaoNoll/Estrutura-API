import User from '../models/User';
// controla as requisições do usuário

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json({ users });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const user = await User.findOne({ where: { uid } });
      return res.json({ user });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({ user });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [user] = await User.update(req.body, { where: { uid } });
      if (!user) {
        throw Error('Usuário não encotrado');
      }
      return res.json({ user });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const user = await User.destroy({ where: { uid } });
      return res.json({ user });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new UserController();
