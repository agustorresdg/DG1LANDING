const productData = {
  pink: {
    image: "selphy-pink-open.png",
    name: "CP1500 Rosa",
    alt: "Canon SELPHY CP1500 rosa",
  },
  white: {
    image: "selphy-white-open-top.png",
    name: "CP1500 Marfil",
    alt: "Canon SELPHY CP1500 marfil",
  },
  black: {
    image: "selphy-black-open-top.png",
    name: "CP1500 Noir",
    alt: "Canon SELPHY CP1500 negra",
  },
};

const buttons = [...document.querySelectorAll(".color-picker button")];
const productImage = document.querySelector("#productImage");
const productName = document.querySelector("#productName");
const nextButton = document.querySelector(".round-next");
const colors = Object.keys(productData);
let currentColor = "pink";

function setColor(color) {
  const product = productData[color];
  if (!product || !productImage || !productName) return;

  currentColor = color;
  productImage.src = product.image;
  productImage.alt = product.alt;
  productName.textContent = product.name;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.color === color);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setColor(button.dataset.color));
});

nextButton?.addEventListener("click", () => {
  const nextIndex = (colors.indexOf(currentColor) + 1) % colors.length;
  setColor(colors[nextIndex]);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".pill-nav a")];

window.addEventListener("scroll", () => {
  const active = sections
    .filter((section) => section.getBoundingClientRect().top < 160)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", active && link.getAttribute("href") === `#${active.id}`);
  });
});
