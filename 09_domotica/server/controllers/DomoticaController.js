import { Room } from "../models/Room.js";
import { Button } from "../models/Button.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

class DomoticaController {
  static async index(req, res) {

    //find all projects
    const rooms = await Room.find().lean();

    res.render("index", {
      rooms: rooms,
    });
  }

  static async show(req, res) {
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      // id is geen geldige ObjectId, stuur een foutbericht of doe iets anders
      return res.redirect('/');
    }

    const room = await Room.findById(id);
    const buttons = await Button.find({ category: new ObjectId(id) }).lean();

    res.render("detail", {
      room: room.toObject(),
      buttons: buttons,
      script: 'toggle.js',
    });

  }

  static async togglebutton(req, res) {
    const { id } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.json({ error: 'Invalid id' });
    }

    const button = await Button.findById(id);

    //toggle status
    button.status = !button.status;

    await button.save();

    res.json({ button: button });
    
  }

}

export default DomoticaController;
