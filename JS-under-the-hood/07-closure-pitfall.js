// problem: 'i' is already 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// solution #1:
// for (var i = 0; i < 3; i++) {
//   function wrapper(x) {
//     setTimeout(() => {
//       console.log("x: ", x);
//       console.log("i: ", i);
//     }, 1000);
//   }

//   wrapper(i);
// }

// solution #2 (IIFE):
// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log("x: ", x);
//       console.log("i: ", i);
//     }, 1000);
//   })(i);
// }

// solution #3 (modern)
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// let that act like var
// let i;
// for (i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
