const jokecontainer=document.querySelector(".text")
const button=document.getElementById("btn")
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=single"

let getjoke= ()=>{
    jokecontainer.classList.remove("fade")
    fetch(url)
    .then((data)=>data.json())
    .then((item)=>{jokecontainer.textContent=item.joke;
                  jokecontainer.classList.add("fade");
    })
}
button.addEventListener("click",getjoke)
getjoke();