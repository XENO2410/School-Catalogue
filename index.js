class School{
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }

  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents){
    this._numberOfStudents = newNumberOfStudents;
  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level`);
  }
 static pickSubstituteTeacher(substituteTeachers){
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];  
  }
}

class Primary extends School{
  constructor(name,numberOfStudents,pickupPolicy,averageTestScores, schoolOverview){
    super(name,'Primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._averageTestScores=averageTestScores;
    this._schoolOverview=schoolOverview;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class Middle extends School{
  constructor(name,numberOfStudents,averageTestScores, schoolOverview){
    super(name,'Middle',numberOfStudents);
    this._averageTestScores=averageTestScores;
    this._schoolOverview=schoolOverview;    
  }
}

class High extends School{
  constructor(name,numberOfStudents,sportsTeams,averageTestScores, schoolOverview){
    super(name,'High',numberOfStudents);
    this._sportsTeams=sportsTeams;
    this._averageTestScores=averageTestScores;
    this._schoolOverview=schoolOverview;    
  }
  get sportsTeams(){
    console.log(this._sportsTeams);
  }
}

class SchoolCatalog{
    constructor() {
    this._schools = [];
  }

  addSchool(school) {
    this._schools.push(school);
  }

  get schools() {
    return this._schools;
  }
}
//Examples

const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const pickTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

console.log(pickTeacher);

const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;

const schoolCatalog = new SchoolCatalog();
schoolCatalog.addSchool(lorraineHansbury);
schoolCatalog.addSchool(alSmith);

schoolCatalog.schools;

console.log('\n'); // Add a newline for separation

// Print the catalog
schoolCatalog.schools.forEach((school, index) => {
  console.log(`School ${index + 1}:`);
  console.log(`Name: ${school.name}`);
  console.log(`Level: ${school.level}`);
  console.log(`Number of Students: ${school.numberOfStudents}`);
  
  if (school.level === 'Primary') {
    console.log(`Pickup Policy: ${school.pickupPolicy}`);
  }
  
  if (school.level === 'High') {
    console.log(`Sports Teams: ${school.sportsTeams}`);
  }
  
  console.log('\n'); // Add a newline for separation
});
