import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';

class OrganizingController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id = req.userId,
      },
      include: [
        {
          model: Meetup,
        },
      ]
    });

    return res.json(subscriptions)
  }
}

export default new OrganizingController();
