// get all dom elements
const addUserBtn = document.getElementById("add-user");
const doubleMoneyBtn = document.getElementById("double-money");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort-richest");
const calculateWealthBtn = document.getElementById("calculate-entire-wealth");

const contentParent = document.getElementById("content");
const wealthParent = document.getElementById("wealth");

// Event listeners
addUserBtn.addEventListener("click", addUser);

const users = [];

// call function to get 3 users on load
window.onload = () => {
  addUser();
  addUser();
  addUser();
};

async function addUser() {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    const user = data.results[0];
    const firstName = user.name.first;
    const lastName = user.name.last;

    const newUser = {
      name: `${firstName} ${lastName}`,
      money: Math.floor(Math.random() * 1_000_000),
    };

    users.push(newUser);

    const userDiv = document.createElement("div");
    userDiv.classList.add("flex", "justify-between");

    userDiv.innerHTML = `<h3>${newUser.name}</h3>
                         <span>${newUser.money}</span> `;
    contentParent.appendChild(userDiv);
  } catch (error) {
    console.log(error);
  }
}

// [].filter
// [].map
// [].sort
// [].reduce

// MATH METHODS
// square root
Math.sqrt(25); // 5
// absolute value
Math.abs(-5); // 5
// power
Math.pow(2, 3); // 8
// random number
Math.random(); // 0.123456789
// floor number
Math.floor(2.9); // 2
// ceil number
Math.ceil(2.1); // 3
