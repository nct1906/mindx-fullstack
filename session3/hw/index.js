// Sử dụng các hàm đọc, ghi file đồng bộ để hoàn thiện các yêu cầu sau
// lấy thông tin học sinh có _id là jubuq3lfmjjmp0wrdeupt
const fs = require('fs');
let data = fs.readFileSync('data.json');
data = JSON.parse(data.toString());
//const data = require('./data.json)

function getDetailStudent() {
  return student = data.find(stu => stu['_id'] === 'jubuq3lfmjjmp0wrdeupt');
}
getDetailStudent()

// Lấy số lượng học sinh có từ Nguyễn
function getCountStudentWithLastName() {
   const lastNameMatch = data.filter(student => student['name'].includes('Nguyễn')).length;
   return lastNameMatch;
 }
getCountStudentWithLastName();

// Tính điểm trung bình của toàn bộ sinh viên (làm tròn đến một chữ số sau dấu phẩy)
function calAverageMark() {
  const average = data.map(student => student['mark']).reduce((sum, li) => sum + li, 0)/data.length;
  //parseFloat(average.toFixed(1)))
  return Math.round(average * 10) / 10
}
calAverageMark()

// Ghi ra số lượng học sinh đạt điểm 10 ra file output.txt (sử dụng hàm ghi đồng bộ);
function writeCountStudentGet10MarkToFile() {
  const student10Num = data.filter(student => student['mark'] == 10).length.toString()
  fs.writeFileSync('output.txt', student10Num)
}
writeCountStudentGet10MarkToFile()

module.exports = {
  getDetailStudent,
  getCountStudentWithLastName,
  calAverageMark,
  writeCountStudentGet10MarkToFile
}