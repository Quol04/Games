
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
        const pokemonSprite= data.sprites.front_default;
        const imgElement =document.getElementById("pokemonSprite");
        imgElement.src= pokemonSprite;
        data.types.forEach((type)=>{
            const typeElement = document.createElement("p");
            typeElement.textContent=type.type.name;
            document.body.appendChild(typeElement);
            typeElement.style.color="blue";
            typeElement.style.fontSize="30px";
            typeElement.style.fontWeight="bold";
            typeElement.style.textAlign="center";

            ///styling the image
            typeElement.style.display="block";
            typeElement.style.margin="0 auto";
            typeElement.style.width="400px";
            typeElement.style.height="200px";
            typeElement.style.border="1px solid black";
            typeElement.style.borderRadius="3rem";
            // typeElement.style.marginTop="5px";
            typeElement.style.marginBottom="50px";
            typeElement.style.boxShadow="5px 5px 5px black";
            typeElement.style.backgroundColor="white";
            typeElement.style.padding="10px";
            typeElement.style.boxSizing="border-box";

        });

        imgElement.style.display="block";
        

    }
    catch(error){
        console.error(error);
    }
    
}
fetchData();