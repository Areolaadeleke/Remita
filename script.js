const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entery] = entries;
  if (!entery.isIntersecting) return;
  entery.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//lazy-image

//const lazy = document.querySelectorAll("img[data-scr]");

//const load = function (entries, observer) {
//const [entery] = entries;
//console.log(entery);

//entery.target.scr = entery.target.dataset.scr;

//entery.target.addEventListener("load", function () {
//entery.target.classList.remove("lazy-image");
//});

//imgobserver.unobserve(entery.target);
//};

//const imgobserver= new IntersectionObserver(load,{
//root:null,
//threshold:0
//});
//lazy.forEach(function(img){
//imgobserver.observe(img);
//});
