const today = new Date();
const day = today.getDay();
const firstSubjects = document.querySelector(".first-subjects");
const lastSubjects = document.querySelector(".last-subjects");
const firstThreeDays = document.querySelector(".first-three-days");
const lastThreeDays = document.querySelector(".last-three-days");

if (day === 6) {
  console.log("Today is HOliday");
  alert("NO classes today");
} else if (day === 0 || day === 1 || day === 2) {
  firstSubjects.classList.remove("opacity-0");
  firstThreeDays.children[day].classList.replace("opacity-0", "opacity-1");
} else {
  lastSubjects.classList.remove("opacity-0");
  lastThreeDays.children[day - 3].classList.replace("opacity-0", "opacity-1");
}
