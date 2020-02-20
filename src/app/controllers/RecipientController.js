/* eslint-disable class-methods-use-this */
import Recipient from '../models/Recipient';

class RecipientController {
  async store(request, response) {
    const recipient = request.body;
    const db_data = await Recipient.create(recipient);

    const { name, street, complement, cep, city, state } = db_data;

    return response.json({
      name,
      street,
      complement,
      city,
      state,
      cep,
    });
  }
}

export default new RecipientController();
