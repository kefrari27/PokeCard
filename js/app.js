//Div render card
let divCard = document.querySelector(".content-card");

/* =================== Functional Form ==================== */

//Form
let form = document.forms[0];

//submit form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Input form
  let input = document.querySelector(".input");
  //entered value
  let idInt = input.value;
  console.log(idInt);
  //Run Async function
  fetchData(idInt);
})

/* =================== Functional Random Button ==================== */

//Random button
let btnRandom = document.querySelector(".btn-random");

//Reaction click event of random button
btnRandom.addEventListener('click', () => {
  //Run Random function
  let randomInt = getRandomInteger(1, 151);
  console.log(randomInt);
  //Run Async function
  fetchData(randomInt);
});


//Random function
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Async Function
const fetchData = async(id) => {
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    renderCard(data);
  } catch(error){
    console.log(error);
  }
}

//Render card function
const renderCard = (pokemon) => {
  console.log(pokemon);
  //Pokemon Image URL
  let urlImage = pokemon.sprites.other.dream_world.front_default;
  //Pokemon Name
  let urlName = pokemon.name;
  //Pokemon Id
  let urlId = pokemon.id;
  //Pokemon Weight
  let urlWeight = pokemon.weight;
  //Pokemon Height
  let urlHeight = pokemon.height;
  //Pokemon HP
  let urlHP = pokemon.stats[0].base_stat;
  console.log(urlHP);
  //Pokemon Attack
  let urlAttack = pokemon.stats[1].base_stat;
  //Pokemon Defense
  let urlDefense = pokemon.stats[2].base_stat;

  divCard.innerHTML = `
  <div class="card">
      <div class="first-section">
        <img src="${urlImage}">
        <h2 class="pokeName">${urlName}</h3>
      </div>
      <div class="second-section">
        <table>
          <tr>
            <th><h3 class="pokeId">ID: </h3></th>
            <th><h3 class="pokeWeight">Weight: </h3></th>
            <th><h3 class="pokeHeight">Height: </h3></th>
          </tr>
          <tr>
            <td><span class="id">${urlId}</span></td>
            <td><span class="weight">${urlWeight}</span></td>
            <td><span class="height">${urlHeight}</span></td>
          </tr>
          <tr>
            <th><h3 class="pokeHP">HP: </h3></th>
            <th><h3 class="pokeAttack">Attack: </h3></th>
            <th><h3 class="pokeDefense">Defense: </h3></th>
          </tr>
          <tr>
            <td><span class="hp">${urlHP}</span></td>
            <td><span class="attack">${urlAttack}</span></td>
            <td><span class="defense">${urlDefense}</span></td>
          </tr>
        </table>
      </div>
    </div>
  `;
}