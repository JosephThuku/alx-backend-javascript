export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  return studentsByCity.map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id)[0];
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
