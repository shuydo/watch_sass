const doc = document;

if (doc.querySelector(".glide")) new Glide(".glide", { perView: 1 }).mount(); //or mailCarousel
if (doc.querySelector(".glide2"))
  new Glide(".glide2", { perView: 3, gap: 40 }).mount(); //productsSlider
if (doc.getElementById("productCarousel")) new Glide(productCarousel).mount();

// console.log(productSlider);
// ========== Yandex Map ===========
// const init = () => {
//   var myMap = new ymaps.Map(
//     "map",
//     { center: [53.87, 27.62], zoom: 10 },
//     { searchControlProvider: "yandex#search" }
//   );

//   myMap.geoObjects.add(
//     new ymaps.Placemark(
//       [53.8760622, 27.6256172],
//       { balloonContent: "<strong>воды пляжа бонди</strong>" },
//       { preset: "islands#icon", iconColor: "#0095b6" }
//     )
//   );
// };

// ymaps.ready(init);

// console.log("---------------");

// breakpoints: {
//   1024: {
//     perView: 2,
//   },
//   420: {
//     perView: 1,
//   },
// },

// ========== Scroll hidden on 1st load site
const scrollBtn = document.querySelector("#scrollBtn"); // ! how w/o js smooth
// console.log(window.scrollY);               --== 715 ==--

// toggle "block" : "none" to "display:"'s scrollBtn by "scroll"
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 75 ? "block" : "none";
});

// "smooth" scroll by "click" to coords
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
);
// console.log(scrollBtn);

// Adding Info Open
// const addInfoOpen = document.querySelector(
//     ".product-features ul li:last-child"
//   ),
//   addInfoBlock = addInfoOpen.querySelector(".product-features_adding__info");
// // console.log(addInfoBlock);
// if (addInfoBlock)
//   addInfoOpen.addEventListener("click", () => {
//     addInfoBlock.classList.toggle("active");
//     console.log('listener activate');
//   });

// console.log("uiiiiii");
