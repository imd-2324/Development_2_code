import { Coffee } from "../models/Coffee.js";

class CoffeeController {
  static async index(req, res) {

    res.render("index", {
      script: "coffee.js",
    });
  }

  static async store(req, res) {
    const { name, size, darkness, sugar } = req.body;
    try {
      const coffee = await Coffee.create({
        name,
        size,
        darkness,
        sugar,
      });
      
      res.redirect("/thanks?id=" + coffee._id);

    } catch (error) {
      console.log(error);
    }
  }


  static async thanks(req, res) {
    const id = req.query.id;
    const coffee = await Coffee.findById(id);

    const pendingOrders = await Coffee.find({ 
      status: "pending", 
      created_at: { $lt: coffee.created_at }
    });

    res.render("thank-you", {
      "coffee": coffee.toObject(),
      "number_of_waiting": pendingOrders.length,
    });
  }

}

export default CoffeeController;
