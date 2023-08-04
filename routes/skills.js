var express = require('express');
var router = express.Router();

var skillsCtrl = require("../controllers/skills");

//GET /todos
router.get("/", skillsCtrl.index);

// GET / todos/:id 

// GET  /skills/new 

router.get("/new", skillsCtrl.new)

router.get("/:id", skillsCtrl.show)

// POST // skills

router.post("/", skillsCtrl.create)


module.exports = router;
