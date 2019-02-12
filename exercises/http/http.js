var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(xhr.responseText)
        for(let i = 0; i < data.objects[0].pokemon.length; i++){
            let liTag = document.createElement("li");
            let pokemon = document.createTextNode(data.objects[0].pokemon[i].name);
            liTag.appendChild(pokemon)
            document.body.appendChild(liTag);
        }
    }
};
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();
