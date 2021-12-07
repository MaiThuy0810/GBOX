//scroll show header
//
//
//
//
// let header = document.querySelector(".header");
// let slider = document.querySelector(".slider");
// let heightSlide = slider.clientHeight;
// let heightHead = header.clientHeight;
// function changeBack() {
//   let scrollY = window.pageYOffset;
//   if (scrollY > heightSlide - heightHead) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// }

// document.addEventListener("scroll", function () {
//   changeBack();
// });

let tophead = document.querySelector(".header .header__wrap");
// console.log(tophead);
let heightTop = tophead.clientHeight;
console.log(heightTop);

function changeBack() {
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  if (scrollY > heightTop) {
    tophead.classList.add("active");
  } else {
    tophead.classList.remove("active");
  }
}

document.addEventListener("scroll", function () {
  changeBack();
});

//nav header
//
//
//
//
let nav = document.querySelector(".nav"),
  btnmenu = document.querySelector(".humbeger");
btnmenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
let w = window.innerWidth;
window.addEventListener("resize", function () {
  if (w < 992) {
    btnmenu = document.querySelector(".btnhumber");
    btnmenu.classList.remove("active");
    nav.classList.remove("active");
  }
});

//
//
//
//
//back to top
let backTop = document.querySelector(".backtop");
backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//
//
//tag news()
let tagButton = document.querySelectorAll(".product__tags .tag");
let tagList = document.querySelectorAll(".product__wrap");
tagButton.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let tagID = index + 1;
    console.log(tagID);
    tagButton.forEach(function (tag) {
      tag.classList.remove("active");
    });
    tagList.forEach(function (tags) {
      tags.classList.remove("active");
    });
    item.classList.add("active");
    document.querySelector(".product__wrap-" + tagID).classList.add("active");
  });
});

//
//
//
//active nmber

let numButton = document.querySelectorAll(".choose__number .num");
numButton.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let tagID = index + 1;
    console.log(tagID);
    numButton.forEach(function (tag) {
      tag.classList.remove("active");
    });
    item.classList.add("active");
    // document.querySelector(".product__wrap-" + tagID).classList.add("active");
  });
});

(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    var mobileNav = $(".mobile-nav");
    mobileNav.toggleClass("hide show");
  });
})();
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
