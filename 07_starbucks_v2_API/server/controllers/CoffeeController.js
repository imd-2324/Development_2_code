import { Coffee } from "../models/Coffee.js";

class CoffeeController {
  static async index(req, res) {

    res.render("index", {
      script: "coffee.js",
    });
  }

  static async dashboard(req, res) {

    const orders = await Coffee
      .find({  status: "pending"  })
      .sort({ created_at: 1 })
      .lean(); // lean to convert to plain JS object

    res.render("admin/dashboard", {
      orders: orders,
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
      
      const pendingOrders = await Coffee.find({ 
        status: "pending", 
        created_at: { $lt: coffee.created_at }
      });

      res.json({ 
        coffee: coffee.toObject(),
        number_of_waiting: pendingOrders.length,
      });

    } catch (error) {
      console.log(error);
    }
  }

}

export default CoffeeController;
