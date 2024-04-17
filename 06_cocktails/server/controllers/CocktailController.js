import { Cocktail } from "../models/Cocktail.js";

class CocktailController {
  static async index(req, res) {

    const { search, minAlcohol, maxAlcohol } = req.query;

    const alcoholQuery = (minAlcohol && maxAlcohol) ? {
      alcohol_pct: {
        $gte: minAlcohol,
        $lte: maxAlcohol,
      },
    } : {};

    const searchQuery = search ? {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ]
    } : {};
    
    const query = {
      $and: [searchQuery, alcoholQuery]
    };

    const cocktails = await Cocktail.find(query);

    //map cocktail objects to hexadecimal strings
    const cocktailConverted = cocktails.map((cocktail) => {
      return {
        ...cocktail.toObject(), // Convert Mongoose document to plain JavaScript object
        _id: cocktail._id.toString(), // Convert ObjectId to hexadecimal string
      };
    });
    //console.log(cocktails);

    res.render("cocktail/list", {
      cocktails: cocktailConverted,
      search: search || "",
      minAlcohol: minAlcohol || "",
      maxAlcohol: maxAlcohol || "",
     });
  }

  static async show(req, res) {
    const id = req.params.id;

    //get cocktail by id
    const cocktail = await Cocktail.findById(id);

    res.render("cocktail/show", {
      cocktail: cocktail.toObject(),
    });
  }

}

export default CocktailController;
