const randomBeer = `https://api.punkapi.com/v2/beers/random`;
const getSingleBeer = (id) => {
    const singleBeer = `https://api.punkapi.com/v2/beers/${id}`;

    getBeers(singleBeer)
        .then(data => {
            let pop = '';
            let random = '';


            let popUp = document.getElementById('popUp');

            pop = `<div class="modal"></div><div class = popUp>
        <div class="close" onclick="close_popUp()">x</div>
        <div class="img_box">
        <img class="popUp_img" src="${data[0].image_url || './image/beer.jpg'}">
        </div>
        <div class="popUp_dis">
        <h3>${data[0].name}</h3>
        <p>${data[0].tagline}</p>
        <hr>
        <span><b>IBU:</b>${data[0].ibu}</span>
        <span><b>ABV:</b>${data[0].abv}</span>
        <span><b>EBC:</b>${data[0].ebc}</span>
        <p class="beer_dis">${data[0].brewers_tips}</p>
        <h3 class="last_title">
            <b>Best served with:</b>
        </h3>
        <ul class="beer_info">
       ${data[0].food_pairing.map(el=> {
        
        return `<li>${el}</li>`
       }).join('')}
        </ul>
        </div>
        <div class="popUp_imgChange">
        <h3>
            <b>You might also like:</b>
        </h3>
        <div class="div_random" id="randomContainer">
        <div class="popup_change" id="img"></div>
        <div class="popup_change" id="img1"></div>
        <div class="popup_change" id="img2"></div>
         </div>
  
        </div>
       
        </div>`

            popUp.innerHTML = pop;
            document.body.style.overflow = 'hidden';

        })


    getBeers(randomBeer)
        .then((data) => {
            console.log(data);
            let beer = '';
            for (let i = 0; i < data.length; i++) {
                beer += `<div onclick="getSingleBeer(${data[i].id})"><img src=${data[i].image_url  || './image/beer.jpg'} class="randomImage"/>
    <h5 class="random_name">${data[i].name}</h5>
    
    </div>`
            }
            img.innerHTML += beer;

        });

    getBeers(randomBeer)
        .then((data) => {
            console.log(data);
            let beer = '';
            for (let i = 0; i < data.length; i++) {
                beer += `<div onclick="getSingleBeer(${data[i].id})"><img src=${data[i].image_url || './image/beer.jpg'} class="randomImage"/>
    <h5 class="random_name">${data[i].name}</h5>
    
    </div>`
            }
            img1.innerHTML += beer;

        });

    getBeers(randomBeer)
        .then((data) => {
            console.log(data);
            let beer = '';
            for (let i = 0; i < data.length; i++) {
                beer += `<div onclick="getSingleBeer(${data[i].id})"><img src=${data[i].image_url || './image/beer.jpg'} class="randomImage"/>
    <h5 class="random_name">${data[i].name}</h5>
    
    </div>`
            }
            img2.innerHTML += beer;

        });

}
// function x(){
//    getBeers(randomBeer)
// .then((data)=>{
//   console.log(data,889)

//   let beer = '';

//     beer = `<div onclick="getSingleBeer(${data[0].id})"><img src=${data[0].image_url || './image/beer.jpg'} class="randomImage"/>
//     <h5 class="random_name">${data[0].name}</h5>

//     </div>`           
//        console.log(beer,477)          
//    return beer;


//         });
// }




// function randomdivs(){
//   let randomBeers = ''; 
//   let beer = '';
//   for(let i=1; i<=3; i++){
//     randomBeers +=`
//     <div class="popup_change">${getBeers(randomBeer)
// .then((data)=>{
//   console.log(data,889)



//     beer = `<div onclick="getSingleBeer(${data[0].id})"><img src=${data[0].image_url || './image/beer.jpg'} class="randomImage"/>
//     <h5 class="random_name">${data[0].name}</h5>

//     </div>`           
//        console.log(beer,477)          
//    // return beer;


//         })}</div> `

//     randomBeers.innerHTML=beer


//   }
//   return randomBeers;


// }