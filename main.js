const header = document.querySelector(".canon-header");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 30);
};

updateHeader();
window.addEventListener("scroll", updateHeader);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
