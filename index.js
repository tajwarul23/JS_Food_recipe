let food = document.querySelector(".food");

// api : www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
let recipe;
const fetchData = async (area) => {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  let data = await api.json();
  return data.meals;
};

const searchData = async () => {
  let input = document.querySelector("#search");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = input.value;
      let api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      let data = await api.json();
      let recipe = data.meals;
      food.innerHTML = recipe
        .map(
          (meal) =>
            ` <div class="border-2 border-amber-500 text-white p-4 rounded-lg shadow-lg w-64 ">
  <div>
  <img src = "${meal.strMealThumb}"/>
  <h1 class="text-center mt-5 font-bold">${meal.strMeal}</h1>
  </div>
  </div>`
        )
        .join(" ");
    }
  });
};

searchData();

let showData = async (msg) => {
  recipe = await fetchData(msg);
  console.log(recipe);
  food.innerHTML = recipe
    .map(
      (meal) =>
        ` <div class="border-2 border-amber-500 text-white p-4 rounded-lg shadow-lg w-64 ">
  <div>
  <img src = "${meal.strMealThumb}"/>
   <h1 class="text-center mt-5 font-bold">${meal.strMeal}</h1>
  </div>
  </div>`
    )
    .join(" ");
};

//by default
showData("american");

let indian = document.querySelector("#indian");
indian.addEventListener("click", () => {
  showData("indian");
});

let canadian = document.querySelector("#canadian");
canadian.addEventListener("click", () => {
  showData("canadian");
});

let american = document.querySelector("#american");
american.addEventListener("click", () => {
  showData("american");
});

let thai = document.querySelector("#thai");
thai.addEventListener("click", () => {
  showData("thai");
});

let british = document.querySelector("#british");
british.addEventListener("click", () => {
  showData("british");
});

let russian = document.querySelector("#russian");
russian.addEventListener("click", () => {
  showData("russian");
});
