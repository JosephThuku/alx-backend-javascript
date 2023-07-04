export default function getListStudentIds(passedObj) {
  return passedObj.map((students) => students.id);
}
