var ourData = [];
var cat = ("movie/now_playing")





getfilms();
async function getfilms() {
  var url=  (`https://api.themoviedb.org/3/`+cat+`?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    x = await fetch(url)
    let z = await x.json()
    ourData = z.results
    
    display()
}

 
$(".navlinks li a").click(function(){

    cat = (this.name)

    getfilms()
})



/* Display */ 


function display() {

    let hsala = ``;

    for (i = 0; i < ourData.length; i++) {
        
        var filmName = ourData[i].original_title
        var filmDisc = ourData[i].overview
        var filmDate = ourData[i].release_date
        var filmRate = ourData[i].vote_average 
        var filmid =  ourData[i].id 
        var filmPoster = ("https://image.tmdb.org/t/p/w500/"+ourData[i].poster_path) 

        hsala +=  `
        <div class="col-lg-4 col-md-6 	 p-3">

            <div class="oneFilm  bg-dark">
                <img src=`+filmPoster+ ` class="img-fluid rounded">
                <div class="rate ">
                     <p>`+filmRate+`</p>  
                </div>   
               
              <div class="filmDisc text-center py-5 px-3">
                <h2>`+filmName+`</h2>                
                <p>`+filmDisc+`</p>
                <button value="`+filmid+`" id="filmid" class="btn btn-danger">Watch Trailer</button>    

                <p class="text-center">`+filmDate+`</p>             
               </div>

            </div>
            
          </div>
          `
          
document.getElementById("rowFilms").innerHTML=hsala


    


    
}

filmTrailer();

}





/* nav */ 
$(".div2").click(function(){
    let width = $(".navlinks").outerWidth();
    let left =  $("#nav").css("left");
        console.log(left);
if(left < "0px"){
    $(".navIconclose").toggleClass("fa-times")
    $("#nav").animate({left : "0"}, 1000)
    $(".navlinks li").animate({ opacity: "1", paddingTop: "25px" }, 1100)

}else 
{
    $(".navIconclose").toggleClass("fa-align-justify")
    $("#nav").animate({left : `-${width}`}, 1000)
    $(".navlinks li").animate({ opacity: "0", paddingTop: "500px" }, 1100)

}




})




/* search*/ 

async function searchByWord(e) {
  var url=  ("https://api.themoviedb.org/3/search/movie?query=" + e + "&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false")
    x = await fetch(url)
    let z = await x.json()
    ourData = z.results
    display()

}


$( "#searchInput" ).keyup(function() {

   var x =  $( "#searchInput" ).val()
   searchByWord(x)


})








// trailer ******
async function filmTrailer() {
    var blackBox = document.getElementById("blackbox")

    let trailer = document.getElementById("openTrailer")
       
 var filmid = ("");
    $("#ourData").click(async function (e) {
        filmid = e.target.value
        var url=  (`https://api.themoviedb.org/3/movie/`+filmid+`/videos?api_key=361608c63a85a9b1a1d2432226f9dcd2&language=en-US`)
        x = await fetch(url)
        let z = await x.json()
        let filmKey =z.results[0].key
        trailer.src= (" https://www.youtube.com/embed/"+filmKey)     
        $(".blackbox").css("display", "flex");              
    })
  
    $(document).click(function (e){
            if (e.target == blackBox) {
            $(".blackbox").css("display", "none");  
            trailer.src= ("")              
        } 
        })
        
    
}

// validation form
let userName = document.getElementById("name")
  , userEmail = document.getElementById("email")
  , userPhone = document.getElementById("phone")
  , userAge = document.getElementById("age")
  , userPassword = document.getElementById("password")
  , userRePassword = document.getElementById("rePassword")
  , userNameAlert = document.getElementById("namealert")
  , userEmailAlert = document.getElementById("emailalert")
  , userPhoneAlert = document.getElementById("phonealert")
  , userAgeAlert = document.getElementById("agealert")
  , userpasswordAlert = document.getElementById("passwordalert")
  , userRepasswordAlert = document.getElementById("repasswordalert");
function userNameValid() {
    return 1 == /^[a-zA-Z0-9]+$/.test(userName.value) ? (userNameAlert.style.display = "none",
    !0) : (userNameAlert.style.display = "block",
    !1)
}
function userEmailValid() {
    return 1 == /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userEmail.value) ? (userEmailAlert.style.display = "none",
    !0) : (userEmailAlert.style.display = "block",
    !1)
}
function userPhoneValid() {
    return 1 == /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value) ? (userPhoneAlert.style.display = "none",
    !0) : (userPhoneAlert.style.display = "block",
    !1)
}
function userAgeValid() {
    return 1 == /^[1-9][0-9]?$|^100$/.test(userAge.value) ? (userAgeAlert.style.display = "none",
    !0) : (userAgeAlert.style.display = "block",
    console.log("dkldkdlkdlk"),
    !1)
}
function userPasswordValid() {
    return 1 == /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value) ? (userpasswordAlert.style.display = "none",
    !0) : (userpasswordAlert.style.display = "block",
    !1)
}
function userRePasswordValid() {
    return userPassword.value == userRePassword.value ? (userRepasswordAlert.style.display = "none",
    !0) : (userRepasswordAlert.style.display = "block",
    !1)
}
userAgeAlert.style.display = "none",
userName.addEventListener("keyup", userNameValid),
userEmail.addEventListener("keyup", userEmailValid),
userPhone.addEventListener("keyup", userPhoneValid),
userAge.addEventListener("keyup", userAgeValid),
userPassword.addEventListener("keyup", userPasswordValid),
userRePassword.addEventListener("keyup", userRePasswordValid),
document.getElementById("contact").addEventListener("click", function() {
    userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid() ? document.getElementById("submitBtn").disabled = !1 : document.getElementById("submitBtn").disabled = !0
});
