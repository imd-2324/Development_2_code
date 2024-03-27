import mongoose from "mongoose";

class DatabaseController {
  static async index(req, res) {
    const connected = mongoose.connection.readyState === 1;

    res.render("database/database", {
      connected,
    });
  }
}

export default DatabaseController;
