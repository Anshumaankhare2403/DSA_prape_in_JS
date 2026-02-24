nums = [1, 1, 0, 1];
// count = 0;
// maxcount = 0;
// for (let i = 0; i < nums.length; i++) {

//     if (nums[i] === 1) {
//         // console.log("+1", nums[i], nums[j]);
//         count++;
//         maxcount = Math.max(maxcount, count);
//     }
//     else {
//         count = 0;
//         // console.log("+0");

//     }



// }


const matches = nums.join('').match(/1+/g);
const maxcount = matches ? Math.max(...matches.map(x => x.length)) : 0;

console.log(maxcount)