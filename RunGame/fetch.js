
async function fetchData() {
    try{
        const pokemonName =document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        // const response = await fetch("https://pokeapi.co/api/v2/pokemon/kakuna");
       
        if (!response.ok){
           throw new Error("Could not fetch resource");

        }
        const data = await response.json();
        console.log(data);
        // console.log(powerfulPoke);
        const pokemonSprite= data.sprites.front_default;
        const imgElement =document.getElementById("pokemonSprite");
        imgElement.src= pokemonSprite;

        imgElement.style.display="block";
        // imgElement.style.fontSize="500px";

    }
    catch(error){
        console.error(error);
    }
    
}
fetchData();