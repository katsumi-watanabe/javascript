const person = {
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  getFullName: function () {
    console.log(this.name[0] + this.name[1]);
  }
};
person.age = 23;
console.log(person.name);
person.getFullName();