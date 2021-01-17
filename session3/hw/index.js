// Sử dụng các hàm đọc, ghi file đồng bộ để hoàn thiện các yêu cầu sau
// lấy thông tin học sinh có _id là jubuq3lfmjjmp0wrdeupt
const fs = require('fs');
let data = fs.readFileSync('data.json');
data = JSON.parse(data.toString());

function getDetailStudent(id) {
  const student = data.find(stu => stu['_id'] === id);
  return {student};
}
console.log(getDetailStudent('jubuq3lfmjjmp0wrdeupt'))

// Lấy số lượng học sinh có từ Nguyễn
function getCountStudentWithLastName(lastName) {
  let lastNameMatch = data.filter(student => student['name'].split(' ')[0] === lastName);
  return lastNameMatch.length;
}
console.log(getCountStudentWithLastName('Nguyễn'));

// Tính điểm trung bình của toàn bộ sinh viên (làm tròn đến một chữ số sau dấu phẩy)
function calAverageMark() {
  let total = data.map(student => student['mark']).reduce((sum, li) => sum + li, 0)/data.length
  return 0;
}
console.log(calAverageMark())

// Ghi ra số lượng học sinh đạt điểm 10 ra file output.txt (sử dụng hàm ghi đồng bộ);
function writeCountStudentGet10MarkToFile() {}

module.exports = {
  getDetailStudent,
  getCountStudentWithLastName,
  calAverageMark,
  writeCountStudentGet10MarkToFile
}