const today = new Date();
const day = today.getDay();
const firstSubjects = document.querySelector(".first-subjects");
const lastSubjects = document.querySelector(".last-subjects");
const firstThreeDays = document.querySelector(".first-three-days");
const lastThreeDays = document.querySelector(".last-three-days");
const todaySubjects = document.querySelector(".today-sub");
const subjects = [
  "Statistics",
  "Discrete Maths",
  "OOP",
  "Microprocessor",
  "Mathematics II",
];
const links = [
  "https://us04web.zoom.us/j/3074734435?pwd=UzcwWTNkNEg1TWgzY1ZaRU5rTFQwQT09",
  "https://zoom.us/j/7782545356?pwd=c3N2SWNQaFFWSFJIaU5ITTFYVmdGQT09",
  "https://us04web.zoom.us/j/75109118527?pwd=V21NTXJNRjl2VzM1SXBiRkxNNHZ2dz09",
  "https://meet.google.com/kcq-uvjo-wns",
  "https://us04web.zoom.us/j/78608296344?pwd=TTRpK2RYenNhZ1NUWUozSHk5cGlTZz09",
];
const hide1 = document.querySelector(".hide-1");
const hide2 = document.querySelector(".hide-2");

if (day === 6) {
  console.log("Today is HOliday");
  alert("NO classes today");
} else if (day === 0 || day === 1 || day === 2) {
  // firstSubjects.classList.remove("opacity-0");
  subFirst(day);
} else {
  // lastSubjects.classList.remove("opacity-0");
  subLast(day);
}

console.log(day);

function subFirst(day) {
  let element = `<ul class="subjects s1">
  <li><a href="${links[0]}">${subjects[0]}</a></li>
        <li><a href="${links[1]}">${subjects[1]}</a></li>
        <li><a href="${links[2]}">${subjects[2]}</a></li>
</ul>`;
  hide1.style.display = "none";
  firstThreeDays.children[day].classList.replace("opacity-0", "opacity-1");
  firstThreeDays.children[day].children[1].innerHTML = `${element}`;
}

function subLast(day) {
  let element = `<ul class="subjects s2">
        <li><a href="${links[3]}">${subjects[3]}</a></li>
        <li><a href="${links[4]}">${subjects[4]}</a></li>
</ul>`;
  hide2.style.display = "none";
  lastThreeDays.children[day - 3].classList.replace("opacity-0", "opacity-1");
  lastThreeDays.children[day - 3].children[1].innerHTML = `${element}`;
}
