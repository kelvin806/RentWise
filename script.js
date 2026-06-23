const menuBtn = document.getElementById("menu-btn");

const mobileNav = document.getElementById("mobile-nav");


menuBtn.addEventListener("click",()=>{


mobileNav.classList.toggle("active");



if(mobileNav.classList.contains("active")){

menuBtn.textContent="✕";

}

else{

menuBtn.textContent="☰";

}


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



});