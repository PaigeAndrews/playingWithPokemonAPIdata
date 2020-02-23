let button = document.getElementsByClassName("myButton")[0];

button.addEventListener("click", myFunction);

const request = async (choice) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${choice}/`);
    let result = await response.json()
    console.log(result)
    return result
}


function myFunction() {
  let choice = document.getElementById("myText").value;
  request(choice)
  document.getElementById("demo").innerHTML = choice;
console.log(choice)
}
