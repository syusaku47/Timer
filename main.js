// var addZero = function (value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// };

// document.getElementById("start_stop").addEventListener("click", function () {
//   let now = new Date();
//   seconds = now.getSeconds();
//   minutes = now.getMinutes();
//   hours = now.getHours();

//   let nowTime = document.getElementById("nowTime");
//   nowTime.innerHTML =
//     addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
// });

// var obj = {
//   15: { name: "masuda", age: 10 },
//   20: { name: "saori", age: 20 },
//   // 15:{{name:"masuda"},{age:31}}
//   // 20:{name:"saori",age:32}
// };

// Object(obj).array.forEach((element) => {});

// let arr = [1, 2, 3];
// let arr2 = [3, 2, 1];
// let arr3 = [];
// arr3[0] = arr;
// arr3[1] = arr2;
// arr += arr2;
// console.log("arr", arr3);

var arr = [1, 2, 3];
// var obj = { 15: { tanuki: "pon-poko", kitsune: "kon-kon", neko: "nyan-nyan" } };
var obj = { 15: { tanuki: "pon-poko", kitsune: "kon-kon", neko: "nyan-nyan" } };

// function aa() {
//   let a = 0;
//   let b = 1;

//   return { zero: a, one: b };
// }
// let ob;
// ob = aa();
// console.log("ob", ob);
// console.log("ob", ob.zero);
// console.log("ob", ob.one);

// console.log(typeof obj);
// console.log(typeof arr);
Object.keys(obj).forEach(function (key) {
  console.log(key + "は" + obj[key] + "と鳴いた！");
});

var addZero = function (value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

// 秒、分、時オブジェクト定義
let clock = {
  seconds: this,
  minutes: this,
  hours: this,
};
let start;
let stop;
let timer_id;
let f;
let diff;

// スタート、停止ボタンがクリックされたとき
document.getElementById("start_stop").addEventListener("click", function () {
  if (this.innerHTML === "START") {
    start = new Date();
    timer_id = setInterval(goTimer, 10);
    this.classList.remove("btn-primary");
    this.classList.add("btn-danger");
    this.innerHTML = "STOP";
  } else {
    stop = new Date();
    let startTime = start.getTime();
    diff = stop.getTime() - startTime;
    f = 1;
    clearInterval(timer_id);
    this.classList.remove("btn-danger");
    this.classList.add("btn-primary");
    this.innerHTML = "START";
  }
});

let goTimer = function () {
  let now = new Date();
  let nowTime = now.getTime();
  let startTime = start.getTime();
  let milli;
  if (f === 1) {
    milli = nowTime - startTime + diff;
  } else {
    milli = nowTime - startTime;
  }

  clock.seconds = Math.floor(milli / 1000);
  clock.minutes = Math.floor(clock.seconds / 60);
  clock.hours = Math.floor(clock.minutes / 60);

  clock.seconds = clock.seconds - clock.minutes * 60;
  clock.minutes = clock.minutes - clock.hours * 60;
  document.getElementById("timer").innerHTML =
    addZero(clock.hours) +
    ":" +
    addZero(clock.minutes) +
    ":" +
    addZero(clock.seconds);
};
