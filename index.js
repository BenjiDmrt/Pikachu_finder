const inputText = document.getElementById("firstText");
const button = document.getElementById("search");
const imagePoke = document.getElementById("images");

imagePoke.src = "inter.png";
async function search(){
    try{
        let pokemon = inputText.value;
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if(!response.ok){
            throw new Error("Could not retrieve the informations");
        }
        const data = await response.json();
        const pokemonImage = data.sprites.front_default
        imagePoke.src = pokemonImage;
        imagePoke.style.visibility = "visible";
    }
    catch(error){
        console.error(error);
        imagePoke.src = "inter.png";
        imagePoke.style.visibility = "visible";
    }
}