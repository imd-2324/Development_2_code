class PageController {
  static async index(req, res) {
    res.render("index");
  }
  static async about(req, res) {
    res.render("about");
  }
}

export default PageController;
