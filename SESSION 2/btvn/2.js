// BTVN
// bài 1 \
// alert(` Hello teacher`);
// alert(` Hãy nhập vào 2 số a và b để xem a chia hết cho b hay không`);
// let a =prompt(` Hãy nhập số a`);
// let b =prompt(` Hãy nhập số b`);
// if ( a % b === 0){
//     console.log(`a chia hết cho b`);
// }
// else{
//     console.log(` a không chia hết cho b`);
// }



// bài 2
// let tuoi =prompt(` Hãy nhập tuổi để xem tuổi có đủ điều kiện vào lớp 10 hay không????`);
// let a =prompt(` Bạn có phải dân tộc thiểu số hay ở nước ngoài về hay là hoàn cảnh đặc biệt khó khăn hay học sinh khuyết tật thì gõ y còn không thì gõ n`)
// if( tuoi % 1 === 0 && tuoi > 0){
// switch(a){
//     case "n" :
//         if( 15 <= tuoi && tuoi <= 17){
//             console.log(` Đủ tuổi điều kiện để là học sinh lớp 10`);
//         }
//         else{
//             console.log(` Không đủ điều kiện`);
//         }
//         break;
//     case "y" :
//         if( 12 <= tuoi && tuoi <= 17){
//             console.log(` Đủ điều kiện để là học sinh lớp 10`);
//         }
//         else{
//             console.log(` không đủ điều kiện là học sinh lớp 10`);
//         }
//         break;
// }
// }
// else{
//     console.log(` Làm gì có tuổi đấy`);
// }




// bài 3
// let so =prompt(` Hãy nhập một số nguyên bất kì để xem đó là số nhỏ hơn 0 hay lớn hơn 0`);
// if( so % 1 === 0 && so >= 0 ){
//     console.log(` Đây là số nguyên lớn hơn 0`);
// }
// else if( so % 1 === 0 && so <= 0){
//     console.log(` Đây là số nguyên nhỏ hơn 0`);
// }
// else{
//     console.log( ` Đây không phải là số nguyên`);
// }






// bài 4
// alert(` Hãy nhập 3 số nguyên để xem số nguyên nào lớn nhất`);
// let a =prompt(` Số nguyên 1`);
// let b=prompt(` Số nguyên thứ 2`);
// let c =prompt(` Số nguyên thứ 3`);
// if( a > b && a > c ){
//     if( a % 1 === 0 ){
//         console.log(` a là số nguyên và lớn nhất`);
//     }
//     else{
//         console.log(` a lớn nhất đấy nhưng mà lại không phải số  nguyên `);
//     }
// }
// else if( b > a && b > c){
//     if( b % 1 === 0){
//         console.log(` b là số nguyên và b lớn nhất`);
//     }
//     else{
//         console.log(` b lớn nhất đấy nhưng mà không phải là số nguyên`);
//     }
// }
// else{
//     if( c % 1 === 0){
//         console.log(` c là số nguyên và lớn nhất`);
//     }
//     else{
//         console.log(` c lớn nhất đấy nhưng mà không phải là số nguyên`);
//     }
// }


// bài 5
// alert(` Hãy nhập điểm của bài kiểm tra , thi giữa kì , thi cuối kì`);
// let kiemtra =Number(prompt(` Hãy nhập điểm bài kiểm tra`));
// let giuaki =Number(prompt(` Hãy nhập điểm thi giữa kì `));
// let cuoiki =Number(prompt(` Hãy nhập điểm thi cuối kì`));
// let tong = ( kiemtra + giuaki + cuoiki ) / 3
// if( kiemtra > 0 && giuaki >0 && cuoiki > 0 ){
//     if( tong < 5 ){
//         console.log(` Học lực yếu`);
//     }
//     else if( 5 <= tong && tong < 7.5 ){
//         console.log(` Học lực khá `);
//     }
//     else{
//         console.log(` Học lực tốt`);
//     }
// }
// else{
//     console.log(` Có điểm không hợp lệ xin nhập lại`);
// }




// bài 6
// let hang =Number(prompt(` Hãy nhập doanh số bán hàng của bạn để tính số hoa hồng (triệu)`));
// if( hang <= 100){
//     console.log(` Mức hoa hồng tháng này của bạn là 5%`);
// }
// else if(100 < hang && hang <= 300){
//     console.log(` Mức hoa hồng tháng này của bạn là 10%`);
// }
// else{
//     console.log(` Mức hoa hồng tháng này của bạn là 20%`);
// }



// bài 7
// alert(` Nhập tuổi cân nặng và chiều cao để tôi xem bạn zư lào ( Lưu ý : với người trên 20 tuổi)`);
// let weight =Number(prompt(` Hãy nhập cân nặng ( kg )`));
// let height =Number(prompt(` Hãy nhập chiều cao (m)`));
// let bmi = weight / ( height ** 2 );
// if( weight > 0 && height >0 ){
//     if( bmi < 18.5 ){
//         console.log(` Thiếu cân`);
//     }
//     else if( 18.5 <= bmi && bmi < 25 ){
//         console.log(` Bình thường`);
//     }
//     else if( 25 <= bmi < 30){
//         console.log(` Thừa cân`);
//     }
//     else{
//         console.log( ` Béo quá ! Giảm cân đi`);
//     }
// }
// else{
//     console.log(` Nhập lại đê`);
// }