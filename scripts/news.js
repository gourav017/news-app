// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let cldata = JSON.parse(localStorage.getItem("news"))

cldata.map(function(elem){
    document.getElementById("detailed_news").innerText=null
    let div = document.createElement("div");

    let img = document.createElement("img")
    img.src = elem.urlToImage;
    img.setAttribute("id","image")

    let h3 = document.createElement("h3");
    h3.innerText=elem.title;

    let p = document.createElement("p");
     p.innerText=elem.description;

    div.append(img,h3,p);

    document.getElementById("detailed_news").append(div)

   
})



import { search,append } from "./fetch.js";

let news_search = (e)=>{
    if(e.key==="Enter"){
       
      let value = document.getElementById("search_input").value;
      search(value).then((data)=>{
          console.log(data.articles);
          let container = document.getElementById("detailed_news");
          append(data.articles,container);
          localStorage.setItem("searchdata",JSON.stringify(data.articles))
          window.location.href="search.html"
      })
    }
}

document.getElementById("search_input").addEventListener("keydown",news_search)