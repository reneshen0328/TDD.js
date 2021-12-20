class Family {
    constructor(name,parents,sibling){
      this.name = name,
      this.parents = parents,
      this.sibling = sibling
    }
  
  childOf(){
    return this.parents.join(' & ')
    }
  
  numbOfSblings(){
    return this.sibling.length
  }
  };
  
  const reneFamily = new Family("Rene",["Sandy","Alex"],["Ryan"]);
  reneFamily.childOf();
  console.log(Family);
  
  module.exports = Family;