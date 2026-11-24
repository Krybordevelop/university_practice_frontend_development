const studentName = "Борис";
const age = 20;
const major = "Комп'ютерні науки";
console.log(`Student: ${studentName}, Age: ${age}, Major: ${major}`);

const a = 10;
const b = 3;
console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Добуток:", a * b);
console.log("Ділення:", a / b);
console.log("Залишок від ділення:", a % b);
console.log("Степінь:", a ** b);

const numberInput = Number(prompt("Введіть число:"));
if (Number.isFinite(numberInput)) {
  console.log(numberInput % 2 === 0 ? "Це парне число" : "Це непарне число");
} else {
  console.error("Введено некоректне число");
}

const temperatureInput = Number(prompt("Введіть температуру:"));
if (Number.isFinite(temperatureInput)) {
  if (temperatureInput < 0) {
    console.log("Холодно");
  } else if (temperatureInput <= 15) {
    console.log("Прохолодно");
  } else if (temperatureInput <= 25) {
    console.log("Нормально");
  } else {
    console.log("Тепло");
  }
} else {
  console.error("Введено некоректну температуру");
}

for (let i = 1; i <= 20; i += 1) {
  console.log(i);
}

let numbersSum = 0;
for (let i = 1; i <= 100; i += 1) {
  numbersSum += i;
}
console.log("Сума чисел від 1 до 100:", numbersSum);

const subjects = ["Математика", "Програмування", "Фізика", "Англійська", "Історія"];

for (let i = 0; i < subjects.length; i += 1) {
  console.log("for:", subjects[i]);
}

for (const subject of subjects) {
  console.log("for...of:", subject);
}

subjects.forEach((subject) => {
  console.log("forEach:", subject);
});

const nums = [10, 5, 22, 8, 1];
const minimum = Math.min(...nums);
const maximum = Math.max(...nums);
const numsSum = nums.reduce((sum, num) => sum + num, 0);
console.log("Мінімум:", minimum);
console.log("Максимум:", maximum);
console.log("Сума елементів:", numsSum);

function square(n) {
  return n ** 2;
}

function isAdult(personAge) {
  return personAge >= 18;
}

console.log("Квадрат числа 5:", square(5));
console.log("Чи є повнолітнім користувач 20 років:", isAdult(20));

const title = document.querySelector("#title");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  title.textContent = "JavaScript is awesome!";
});

document.querySelector("#results").textContent = [
  `Student: ${studentName}, Age: ${age}, Major: ${major}`,
  `Сума чисел від 1 до 100: ${numbersSum}`,
  `Масив nums: мінімум ${minimum}, максимум ${maximum}, сума ${numsSum}`,
  `square(5): ${square(5)}`,
  `isAdult(20): ${isAdult(20)}`,
].join("\n");