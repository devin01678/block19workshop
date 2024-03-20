const freelancersArray = [
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Dr.Slice", price: 25, occupation: "gardener" },
  { name: "Dr.Pressure", price: 51, occupation: "programmer" },
  { name: "Prof.Possibility", price: 43, occupation: "teacher" },
  { name: "Prof.Prism", price: 81, occupation: "teacher" },
  { name: "Dr.Impulse", price: 43, occupation: "teacher" },
  { name: "Prof.Spark", price: 76, occupation: "programmer" },
  { name: "Dr.Wire", price: 47, occupation: "teacher" },
  { name: "Prof.Goose", price: 72, occupation: "driver" },
];

const randomFreelancersArray = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

const title = document.querySelector("#title");
const container = document.querySelector("#container");
let average = 0;

const addFreelancerIntervalId = setInterval(addRandomFreelancerToList, 2000);

render();

function render() {
  // Render the freelancers
  let freelancers = document.querySelector("#freelancerId");
  freelancers.replaceChildren();
  randomFreelancersArray.forEach((person) => {
    let freelancer = document.createElement("li");
    let text = document.createTextNode(
      `${person.name + ", " + person.price + ", " + person.occupation}`
    );
    freelancers.appendChild(freelancer);
    freelancer.appendChild(text);
    freelancer.classList.add("freelancer");
  });
}

function addRandomFreelancerToList() {
  const randomNumber = Math.floor(Math.random() * freelancersArray.length);
  const item = freelancersArray[randomNumber];
  const index = freelancersArray.indexOf(item);
  freelancersArray.splice(index, 1);
  randomFreelancersArray.push(item);

  average =
    randomFreelancersArray.reduce(
      (acc, currentItem) => acc + currentItem.price,
      0
    ) / randomFreelancersArray.length;

  title.innerText = `The avg revenue of the rates was: ${average}`;

  render();
}

function findAveragePrice(price) {
  let sum = 0;
  for (let i = 0; i < freelancersArray.length; i++) {
    sum += price[i];
  }
  return sum / freelancersArray.length;
}

// let averagePrice = findAveragePrice(freelancersArray.price);

// function averagePriceUpdates() {
//   let averagePrice = findAveragePrice(freelancersArray.price);
//   console.log(averagePrice);
// }

// setInterval(() => averagePriceUpdates(), 2000);

// function reiterateFreelancers() {
//   if (freelancersArray.length < 10) {
//     findAveragePrice;
//   }
// }

// function addElement() {
//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode("averagePrice");
//   newDiv.appendChild(newContent);
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

// let averagePrice = setInterval(findAveragePrice, 2000);
