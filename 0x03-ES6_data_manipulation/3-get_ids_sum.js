export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currValue) => accumulator + currValue.id, 0);
}
