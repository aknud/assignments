axios.get("https://api.vschool.io/emily/todo").then(function(response){
  console.log(response.data)
  var arr = response.data
  arr.map(function(item){
    // document.getElementById("name").innerHTML += `<input onclick="text()" type="checkbox">`

    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.addEventListener("click", text)
    document.getElementById("name").appendChild(input)
    document.getElementById("name").innerHTML += `${item.title}<br>`
    document.getElementById("name").innerHTML += `${item.description}<br>`
    document.getElementById("name").innerHTML += `<img src="${item.imgUrl}"/><br><br>`
  })
  return arr
})

function text(e){
    console.log("garbage")
    e.target.style.textDecoration = "line-through";
  }