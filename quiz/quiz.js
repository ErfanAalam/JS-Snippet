let ques = document.querySelector("#question");
let timer = document.querySelector("#timer");
let options = document.querySelectorAll("p");
let wrapper = document.querySelector("#wrapper");

const questions = [
  {
    q: "2+2",
    a: 4,
    opt: [1, 2, 3, 4],
  },
  {
    q: "2+2+2",
    a: 6,
    opt: [5, 6, 7, 8],
  },
  {
    q: "2+2+2+2",
    a: 8,
    opt: [6, 7, 8, 2222],
  },
  {
    q: "2+2+2+2+2",
    a: 10,
    opt: [10, 12, 13, 14],
  },
];

let queNo = 0;
//let count = 5;
timers();
let interval = setInterval(() => {
  let count = 0;
  if (queNo > questions.length - 1) {
    clearInterval(interval);
    wrapper.innerHTML = result;
  } else {
    printQuestions();
    options.forEach((x) => {
      x.classList.remove("correct", "incorrect");
    });
    timers();
  }
}, 5000);

printQuestions();

function printQuestions() {
  console.log(queNo);
  ques.innerHTML = questions[queNo].q;
  printOptions(questions[queNo].opt);

  // checkAns(queNo)

  queNo++;
}

function printOptions(arr) {
  options.forEach((option, index) => {
    option.innerHTML = arr[index];
  });
}

function timers() {
  let count = 5;
  timer.innerHTML = count;
  let inter = setInterval(() => {
    count--;
    timer.innerHTML = count;
    if (count == 1) {
      clearInterval(inter);
      count = 5;
    }
  }, 1000);
}

let checkans = 0;
let result = 0;
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(checkans);

    if (e.target.innerHTML == questions[checkans].a) {
      checkans++;
      option.classList.add("correct");
      result++;
    } else {
      checkans++;
      option.classList.add("incorrect");
    }
  });
});
