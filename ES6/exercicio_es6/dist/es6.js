"use strict";

var students = [{
  name: 'Joana',
  note: 6.5
}, {
  name: 'Jose',
  note: 7.5
}, {
  name: 'Marcelo',
  note: 3.7
}, {
  name: 'Cristiane',
  note: 9.2
}];
var returnApprovedStudents = function returnApprovedStudents(studentList) {
  var approvedStudents = studentList.filter(function (student) {
    return student.note >= 6;
  });
  return approvedStudents;
};
var approved = returnApprovedStudents(students);
console.log(approved);