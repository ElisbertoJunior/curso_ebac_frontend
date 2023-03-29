const students = [
  {
    name: 'Joana',
    note: 6.5
  },
  {
    name: 'Jose',
    note: 7.5
  },
  {
    name: 'Marcelo',
    note: 3.7
  },
  {
    name: 'Cristiane',
    note: 9.2
  }
]

const returnApprovedStudents = studentList => {
  const approvedStudents = studentList.filter(student => student.note >= 6);
  return approvedStudents;  
}

const approved =  returnApprovedStudents(students);

console.log(approved);