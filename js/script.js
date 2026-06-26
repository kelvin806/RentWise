                            // landingpage javascript

/*fetch("./components/navbar.html")
.then(response => response.text())
.then(data => {


document.getElementById("navbar-container").innerHTML = data;



const menuBtn = document.getElementById("menu-btn");

const mobileNav = document.getElementById("mobile-nav");



menuBtn.onclick = function(){


mobileNav.classList.toggle("active");



if(mobileNav.classList.contains("active")){

menuBtn.innerHTML = "✕";

}

else{

menuBtn.innerHTML = "☰";

}



};



});




fetch("./components/footer.html")
.then(response => response.text())
.then(data => {


document.getElementById("footer").innerHTML = data;


});


const searchForm =
document.getElementById("search-form");


searchForm.addEventListener("submit",(e)=>{


e.preventDefault();



const data = {


location:
document.getElementById("location").value,


propertyType:
document.getElementById("property-type").value


};



console.log(data);



});*/




                      //Property page javascript



// ================= LOAD NAVBAR =================


fetch("../components/property-navbar.html")

.then(response => response.text())

.then(data => {


document.getElementById("property-navbar").innerHTML = data;



// After navbar loads

setupNavbar();



});






function setupNavbar(){



const searchInput = document.getElementById("location-search");



if(searchInput){


searchInput.addEventListener("input",()=>{


console.log(
"Searching:",
searchInput.value
);



/*

Later this becomes:

fetch("/api/properties?location=" + searchInput.value)


*/


});



}



}


fetch("./components/footer.html")
.then(response => response.text())
.then(data => {


document.getElementById("footer").innerHTML = data;


});










// ================= FAVORITE BUTTON =================



const favorites = document.querySelectorAll(".heart");



favorites.forEach(button=>{


button.addEventListener("click",()=>{


button.classList.toggle("saved");



if(button.classList.contains("saved")){


button.innerHTML="♥";


}


else{


button.innerHTML="♡";


}



});



});










// ================= FILTER BUTTON =================



const applyButton = document.getElementById("apply-filter");



if(applyButton){


applyButton.addEventListener("click",()=>{



const minPrice =
document.getElementById("min-price").value;



const maxPrice =
document.getElementById("max-price").value;



const verified =
document.getElementById("verified-filter").checked;




const types = [];


document.querySelectorAll(".type-filter:checked")
.forEach(item=>{


types.push(item.value);


});





const filterData = {


minPrice,

maxPrice,

verified,

propertyTypes:types


};




console.log(filterData);





/*

Later:

fetch("/api/properties",{

method:"POST",

body:JSON.stringify(filterData)

})


*/



});



}








// ================= CLEAR FILTER =================



const clearButton =
document.querySelector(".filter-title button");



if(clearButton){



clearButton.addEventListener("click",()=>{



document.querySelectorAll("input")
.forEach(input=>{


input.checked=false;


input.value="";


});



});



}










// ================= PAGINATION =================



const pages =
document.querySelectorAll(".pagination button");



pages.forEach(page=>{



page.addEventListener("click",()=>{



pages.forEach(btn=>{


btn.classList.remove("active");


});



page.classList.add("active");



console.log(
"Page:",
page.innerText
);



/*

Later:

fetch("/api/properties?page=" + page.innerText)


*/



});



});

