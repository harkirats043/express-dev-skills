const skills = [
  { id: "html", skill: "boilerplate", done: true },
  { id: "css", skill: "flexboard", done: false },
  { id: "javascript", skill: "dom", done: true }
]

module.exports = {
  getAll,
  getOne,
  create
};

function create(skill){
 // Add the id
  skill.id = "Python";
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {

  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}