// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page




let myn =JSON.parse(localStorage.getItem("news"))||[];


let data = JSON.parse(localStorage.getItem("searchdata"))
data.map(function(elem){
    let div = document.createElement("div");

    let img = document.createElement("img")
    img.src = elem.urlToImage;
    img.setAttribute("id","image")

    let h3 = document.createElement("h3");
    h3.innerText=elem.title;

    let p = document.createElement("p");
     p.innerText=elem.description;

    div.append(img,h3,p);

    document.getElementById("results").append(div)

    div.addEventListener("click",function(){
        mynews(elem);
    })
})

function mynews(elem){
    myn.push(elem)
    localStorage.setItem("news",JSON.stringify(myn))
    window.location.href="news.html"
}


import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import { search,append } from "./fetch.js";


let news_search = (e)=>{
    if(e.key==="Enter"){
      let value = document.getElementById("search_input").value;
      search(value).then((data)=>{
          console.log(data);
          let container = document.getElementById("results");
          container.innerText=null;
          append(data.articles,container);
          localStorage.setItem("news",JSON.stringify(myn))

      })
    }
}

document.getElementById("search_input").addEventListener("keydown",news_search)