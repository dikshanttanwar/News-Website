let headline = document.querySelector(".headline")
let apiKey = "1d3431d27f0d444484889720cdc6dd84";
let main = document.querySelector("main")
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
let newsDate = `${year}-${month}-${date}`
// 2024-07-03
let fetchApi = ()=>{
    fetch(`https://newsapi.org/v2/everything?q=India&from=${newsDate}&sortBy=publishedAt&apiKey=${apiKey}`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        bindData(data.articles)
    })
    .catch((error)=>{
        console.log(error)
    })
}
fetchApi();

let bindData=(articles)=>{
    // console.log(articles)
    console.log(articles)
    console.log("wroking at articles")
    articles.forEach((articles) => {
        let date = new Date(articles.publishedAt).toLocaleString();
        let div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
        <div class="img">
            <img src="${articles.urlToImage}" alt="">
        </div>
        <div class="details-section">
            <h1 class="headline"><a target="_blank" href="${articles.url}">${articles.title}</a></h1>
            <h1 class="line2">${articles.description}</h1>
            <h1 class="line3">Author : ${articles.author} . ${articles.source.name} : ${date}</h1>
        </div>
        `
        if(articles.title.length>=120){
            articles.title.trim()
        }
        if(!articles.urlToImage)return
        else{
            main.appendChild(div)
        }
        console.log(newsDate)
    });
    // main.addEventListener("click",(e)=>{
    //     e.target
    //     console.log(e.target)
    // })
}


let topBtn = document.querySelector(".button")
topBtn.addEventListener("click",()=>{
    topFunction();
})

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
