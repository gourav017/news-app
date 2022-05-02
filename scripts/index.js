// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



 
 

import {searchh,appendd} from "./fetch.js"

let value = "in";

searchh(value).then((data)=>{
    console.log(data.articles);
    let container = document.getElementById("results");
    appendd(data.articles,container);
})
 








        

import { search,append } from "./fetch.js";

let news_search = (e)=>{
    if(e.key==="Enter"){
       
      let value = document.getElementById("search_input").value;
      search(value).then((data)=>{
          console.log(data.articles);
          let container = document.getElementById("results");
          append(data.articles,container);
          localStorage.setItem("searchdata",JSON.stringify(data.articles))
          window.location.href="search.html"
      })
    }
}

document.getElementById("search_input").addEventListener("keydown",news_search)

let sidebar = document.getElementById("sidebar").children;
for(let el of sidebar){
    el.addEventListener("click",cnews);
}

function cnews(){
    console.log(this.id);
    
    searchh(this.id).then((data)=>{
        console.log(data.articles);
        let container = document.getElementById("results");
        container.innerText=null;
        appendd(data.articles,container);
    });
}
