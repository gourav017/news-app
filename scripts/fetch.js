let search= async(value)=>{
   try{
         let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
         let data = await res.json();
         console.log(data);
         return data;
   }catch(err){
       console.log(err);
   }

}

let append=(data,container)=>{

    data.map(({urlToImage,title,description})=>{
        let div = document.createElement("div");

        let img = document.createElement("img")
        img.src = urlToImage;
        img.setAttribute("id","image")

        let h3 = document.createElement("h3");
        h3.innerText=title;

        let p = document.createElement("p");
         p.innerText=description;

        div.append(img,h3,p);

        container.append(div)
    })

}

export {search,append};



let searchh= async(value)=>{
    try{
          
          let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
          let data = await res.json();
          console.log(data.articles);
          return data
    }catch(err){
        console.log(err);
    }
 
 }

 
 let appendd=(data,container)=>{
 
     data.map(({urlToImage,title,description})=>{
         let div = document.createElement("div");
 
         let img = document.createElement("img")
         img.src = urlToImage;
         img.setAttribute("id","image")
 
         let h3 = document.createElement("h3");
         h3.innerText=title;
 
         let p = document.createElement("p");
          p.innerText=description;
 
         div.append(img,h3,p);
 
         container.append(div)
     })
 
 }

 export {searchh,appendd}