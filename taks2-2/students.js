let students = [
  {
    name: "Anna",
    languages: ["English", "Ukrainian"],
    age: 21,
  },
  {
    name: "Bob",
    languages: ["Polish", "Spanish"],
    age: 26,
  },
  {
    name: "Alice",
    languages: ["Italian", "Russian"],
    age: 18,
  },
];
const getLanguages = (students, condition = (student) => student) => {
  const res = students.filter(condition);
  return res.reduce((acc, value) => [...acc, ...value.languages], []);
};
console.log(getLanguages(students, (student) => student.age < 26)); //['English', 'Ukrainian',  'Italian', 'Russian']
console.log(getLanguages(students, (student) => student.name === "Alice")); //['Italian', 'Russian']
console.log(getLanguages(students)); //['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Russian']
