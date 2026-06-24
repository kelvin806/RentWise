fetch("./components/navbar.html")
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



});




