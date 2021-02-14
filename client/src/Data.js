const array = [
  {
    title: "Prepare for the Test",
    desc: "CSCI 1801 test upcoming",
    pomodoroTimeDone: 0,
    pomodoroSessionsDone: 10,
    priority: 2,
    tasks: [
      { task: "Study chapter 2", taskStatus: true },
      { task: "Study chapter 5", taskStatus: true },
      { task: "Study chapter 18", taskStatus: true },
      { task: "Study chapter 20", taskStatus: false },
    ],
  },
  {
    title: "Learn Chess Openings",
    desc: "Beat Magnus Carlsen at his own game",
    pomodoroTimeDone: 0,
    pomodoroSessionsDone: 10,
    priority: 3,
    tasks: [
      { task: "Study chapter 99", taskStatus: false },
      { task: "Study chapter 5", taskStatus: false },
      { task: "Study chapter 18", taskStatus: true },
      { task: "Study chapter 20", taskStatus: false },
    ],
  },
  {
    title: "Exercise",
    desc: "I need 6pack abs",
    pomodoroTimeDone: 0,
    pomodoroSessionsDone: 10,
    priority: 5,
    tasks: [
      { task: "Study chapter 89", taskStatus: false },
      { task: "Study chapter 5", taskStatus: false },
      { task: "Study chapter 18", taskStatus: true },
      { task: "Study chapter 20", taskStatus: false },
    ],
  },
];
export default array;

export const incentive = [
  { name: "Ice Cream", desc: "I love ice cream" },
  { name: "Chocolate", desc: "Damn those" },
  { name: "Pizza", desc: "Papa John trippin!" },
  { name: "Coffee", desc: "Yyeyeyye" },
];

function progressCalculator(tasksArray) {
  let count = 0;
  tasksArray.forEach((element) => {
    if (element.taskStatus) {
      count++;
    }
  });
  return (count / tasksArray.length) * 100;
}

function prog(array) {
  array.forEach((_, i) => {
    array[i].progress = progressCalculator(array[i].tasks);
  });
}

prog(array);
