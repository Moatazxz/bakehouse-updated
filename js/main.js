let changbtn = document.getElementById("navbtn");
let moviesLi = document.getElementsByClassName("nav-category");
let allmovies = [];
let movie = [];
let check=document.getElementById("check");






async function getMovies(val = "", que = "") {

    if (que === "" && val != "trending") {

        let result = await fetch(`https://api.themoviedb.org/3/movie/${val}?api_key=10bd5ace5477f08151ab740101c68b88&language=en-US&page=1`);
        let testResult = await result.json();
        //check response
        if (result.status == 200) {
            allmovies = testResult.results;
          
            show();


        }
    }
    if (val === "") {
        let result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=10bd5ace5477f08151ab740101c68b88&language=en-US&query=${que}&page=1&include_adult=false`);
        let testResult = await result.json();
        //check response
        if (result.status == 200) {
            allmovies = testResult.results;
         
            show();
        }
    }
    if (val == "trending") {
        let result = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=10bd5ace5477f08151ab740101c68b88`);
        let testResult = await result.json();
        //check response
        if (result.status == 200) {
            allmovies = testResult.results;
            
            show();
        }
    }
}

for (let i = 0; i < moviesLi.length; i++) {
    moviesLi[i].addEventListener('click', (e) => {
        let term = e.target.innerHTML;
    
        getMovies(`${term.replace(" ", "_").toLowerCase()}`, "");
    })
}


getMovies("trending","");
function show() {
    let cardDiv = ``;

    for (let i = 0; i < allmovies.length; i++) {
       
        cardDiv += `
        <div class="col-lg-4 col-md-6 mb-5">
        <div class="card-container">
      <div class=" card position-relative overflow-hidden rounded-3">
            <img src="https://image.tmdb.org/t/p/w500${allmovies[i].poster_path}" class="w-100 h-100" alt="poster">
            <div class="overlay position-absolute end-0 h-100 w-100 d-flex justify-content-center align-items-center rounded-3">
            <div class="text-center">
            <h2>${allmovies[i].original_title}</h2>
            <p>${allmovies[i].overview}</p>
            <p>Rate ${allmovies[i].vote_average}</p>
            <p>${allmovies[i].release_date}</p>
            </div>
            
            
            </div>
      </div>
        </div>
      </div>
       `;
    }

    document.getElementById('maindata').innerHTML = cardDiv;
}


function searchCurrent(term){
    let cardDiv = ``;

    for (let i = 0; i < allmovies.length; i++) {



  if(allmovies[i].original_title.toLowerCase().includes(term.toLowerCase()))     
  {  cardDiv += `
    <div class="col-lg-4 col-md-6 mb-5">
    <div class="card-container">
    <div class=" card position-relative overflow-hidden rounded-3">
        <img src="https://image.tmdb.org/t/p/w500${allmovies[i].poster_path}" class="w-100 h-100" alt="poster">
        <div class="overlay position-absolute end-0 h-100 w-100 d-flex justify-content-center align-items-center rounded-3">
        <div class="text-center">
        <h2>${allmovies[i].original_title}</h2>
        <p>${allmovies[i].overview}</p>
        <p>Rate ${allmovies[i].vote_average}</p>
        <p>${allmovies[i].release_date}</p>
        </div>
        
        
        </div>
    </div>
    </div>
    </div>
    `;}
    }
if(cardDiv==``){
    document.getElementById('maindata').innerHTML = "Not Found";
}else{
    document.getElementById('maindata').innerHTML = cardDiv;
}
    
}





function validation(){
    let mailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let nameValid=/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,20}$/;
    let passvalid= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$/;
    let age=/^[1-9]{2}$/;
    let phone=/(201)[0-9]{9}$/

let fname=$("#name").val();
let fmail=$("#mail").val();
let fphone=$("#phone").val();
let fage=$("#age").val();
let fpass=$("#pass").val();
let frepass=$("#repass").val();

if(  mailValid.test(fmail)==true&&
nameValid.test(fname)==true&&
passvalid.test(fpass)==true&&
age.test(fage)==true &&
fpass==frepass&&
phone.test(fphone)==true){
    return true;
}else{
    return false;
}


}




$("#name").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});
$("#mail").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});
$("#phone").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});
$("#age").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});
$("#name").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});
$("#pass").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});
$("#repass").keyup(function () { 
    if(validation()){
        check.classList.replace("d-block","d-none");
    }
    else{
        check.classList.replace("d-none","d-block");
    }
});










$("#findInput").keyup(function (e) { 
  
    let term=$(this).val();
    getMovies('',`${term}`);
 });
$("#findInput2").keyup(function (e) { 
  
    let term=$(this).val();
   searchCurrent(`${term}`);
 });
 


$('#navbtn').click(function () {
    if ($('.side-bar').css('left') == '0px') {
        $('.side-bar').animate({ left: `-250px` }, 500);
        $('.item1,.item2,.item3,.item4,.item5,.item6').animate({top:'300px'})
        changbtn.classList.replace('fa-times', 'fa-stream');
    }
    else {
        $('.side-bar').animate({ left: `0` }, 500,()=>{
            $(".item1").animate({top:"10"},200,()=>{
                $(".item2").animate({top:"40"},200,()=>{
                    $(".item3").animate({top:"70"},200,()=>{
                        $(".item4").animate({top:"100"},200,()=>{
                            $(".item5").animate({top:"130"},200,()=>{
                                $(".item6").animate({top:"160"},200,()=>{})
                            })
                        })
                    })
                })
  
            })

        });
        changbtn.classList.replace('fa-stream', 'fa-times');
    }
});