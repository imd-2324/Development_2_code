import { Project } from "../models/Project.js";

class ProjectController {
  static async index(req, res) {

    //find all projects
    const projects = await Project.find();

    //map project objects to hexadecimal strings
    const projectsConverted = projects.map((project) => {
      return {
        ...project.toObject(), // Convert Mongoose document to plain JavaScript object
        _id: project._id.toString(), // Convert ObjectId to hexadecimal string
      };
    });

    res.render("project/list", {
      style: "project-list.css",
      script: "project-list.js",
      projects: projectsConverted,
    });
  }

  static async show(req, res) {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.render("project/show", {
      project: project.toObject(),
      style: "project-detail.css",
    });
  }

  static async create(req, res) {
    res.render("project/create", {
      style: "project-create.css",
    });
  }

  static async store(req, res) {
    const { name, description } = req.body;
    try {
      const project = await Project.create({
        name,
        description
      });

      console.log(project);
      res.redirect("/projects");
    } catch (error) {
      console.log(error);
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.redirect("/projects");
  }
}

export default ProjectController;
