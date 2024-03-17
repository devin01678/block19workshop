// const freelancerArray = [
//   { name: "Alice", price: 30, occupation: "writer" },
//   { name: "Bob", price: 50, occupation: "teacher" },
//   { name: "Carol", price: 70, occupation: "programmer" },
//   { name: "Dr.Slice", price: 25, occupation: "gardener" },
//   { name: "Dr.Pressure", price: 51, occupation: "programmer" },
//   { name: "Prof.Possibility", price: 43, occupation: "teacher" },
//   { name: "Prof.Prism", price: 81, occupation: "teacher" },
//   { name: "Dr.Impulse", price: 43, occupation: "teacher" },
//   { name: "Prof.Spark", price: 76, occupation: "programmer" },
//   { name: "Dr.Wire", price: 47, occupation: "teacher" },
//   { name: "Prof.Goose", price: 72, occupation: "driver" },
// ];

const names = [
  "Alice",
  "Bob",
  "Carol",
  "Dr.Slice",
  "Dr.Pressure",
  "Prof.Possibility",
  "Prof.Prism",
  "Dr.Impulse",
  "Prof.Spark",
  "Dr.Wire",
  "Prof.Goose",
];

const prices = [30, 50, 70, 25, 51, 43, 81, 43, 76, 47, 72];

const occupations = [
  "writer",
  "teacher",
  "programmer",
  "gardener",
  "programmer",
  "teacher",
  "teacher",
  "teacher",
  "programmer",
  "teacher",
  "driver",
];

const maxFreelancers = 10;

const freelancersArray = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob,", price: 50, occupation: "teacher" },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

render();

function render() {
  // Render the freelancers
  const freelancers = document.querySelector("#freelancerId");
  freelancers.replaceChildren();
  freelancersArray.forEach((person) => {
    const freelancer = document.createElement("li");
    freelancer.classList.add(
      "freelancer",
      person.name,
      person.price,
      person.occupation
    );
    freelancers.append(freelancer);
  });
}

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  freelancersArray.push({ name, price, occupation });

  render();

  if (freelancersArray.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
