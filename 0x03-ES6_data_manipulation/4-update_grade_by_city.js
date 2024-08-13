export default function updateStudentGradeByCity(stdlist, city, newgrade) {
  const filtloc = stdlist.filter((student) => student.location === city);
  return filtloc.map((student) => {
    const fgrade = newgrade.filter((grade) => student.id === grade.studentId)[0];
    console.log(fgrade);
    console.log('before ret');
    return {
      ...student,
      grade: fgrade ? fgrade.grade : 'N/A',
    };
  });
}
