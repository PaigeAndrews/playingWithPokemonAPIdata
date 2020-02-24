let button = document.getElementsByClassName("myButton")[0];
const input = document.querySelector('#myText');


button.addEventListener("click", myFunction);
input.addEventListener('keyup',function(e){
  if (e.keyCode === 13) {
  myFunction();
}
});

const request = async (choice) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${choice}/`);
    let result = await response.json()
    console.log(result)
    return result
}


async function myFunction() {
  let choice = document.getElementById("myText").value.toLowerCase();
  let result = await request(choice)
  
  console.log(choice)
  // abilities = result.abilities
  document.getElementById("sprites").innerHTML.src = 
  // result.sprites.front_default
  document.getElementById("pokeName").innerHTML = choice;
  // document.getElementById("pokeAbilities").innerHTML = result.abilities.map(element => " " + element.ability.name )
  document.getElementById("pokeAbilities").innerHTML = result.moves.map(element => " " + element.move.name )
  document.getElementById("pokeId").innerHTML = "# " + result.id 
  document.getElementById("pokeType").innerHTML = result.types[0].type.name
  document.getElementById("pokeStat").innerHTML = result.stats.map(element => " " + element.stat.name)
  document.getElementById("pokeItems").innerHTML = result.held_items.map(element => " " + element.item.name + " - rarity: " + element.version_details[0].rarity)
}
