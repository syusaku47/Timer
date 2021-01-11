let a = 5;
let b = 10;

console.log(a, b);

document.write("<p>数字" + a + "です<br>");

let today = new Date();
document.write(
  "今日の日付は" +
    today.getFullYear() +
    "年" +
    (today.getMonth() + 1) +
    "月" +
    today.getDate() +
    "日です"
);

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

var addZero = function (value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

let clock = {
  seconds: this,
  minutes: this,
  hours: this,
};
let start;
let timer_id;
let f = 0;
document.getElementById("start_stop").addEventListener("click", function () {
  if (this.innerHTML === "START") {
    start = new Date();

    timer_id = setInterval(goTimer, 10);
    this.classList.remove("btn-primary");
    this.classList.add("btn-danger");
    this.innerHTML = "STOP";
    f = 1;
  } else {
    clearInterval(timer_id);
    this.classList.remove("btn-danger");
    this.classList.add("btn-primary");
    this.innerHTML = "START";
  }
});

let goTimer = function () {
  let now = new Date();

  let milli = now.getTime() - start.getTime();
  if (f === 1) {
    clock.seconds =
      Math.floor(milli / 1000) +
      clock.seconds +
      clock.minutes * 60 +
      clock.hours * 3600;
    f = 0;
  } else {
    clock.seconds = Math.floor(milli / 1000);
  }
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

// let div = function(value) {
//     value = value % 60;
//     return value;
// }
