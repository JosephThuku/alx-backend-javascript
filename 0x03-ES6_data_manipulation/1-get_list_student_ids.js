export default function getListStudentIds(passedObj) {
  if (!Array.isArray(passedObj)) {
    return [];
  }
  return passedObj.map((students) => students.id);
}
