const skills = [
     {id:"html", skill:"boilerplate", done:true},
     {id:"css", skill:"flexboard", done:false},
     {id:"javascript", skill:"dom", done:true}
]

module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id){

return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }