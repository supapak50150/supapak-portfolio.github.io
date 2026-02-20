// function loadNav() {
//   fetch("component/nav.html")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("nav not found");
//       }
//       return res.text();
//     })
//     .then((data) => (document.getElementById("nav").innerHTML = data))
//     .catch((err) => console.log(err));
// }

// function loadHero() {
//   fetch("component/hero.html")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("hero not found");
//       }
//       return res.text();
//     })
//     .then((data) => (document.getElementById("hero").innerHTML = data))
//     .catch((err) => console.log(err));
// }

// loadNav();
// loadHero();

// function loadComponent(id, file) {
//   fetch(file)
//     .then((res) => {
//       if (!res.ok) throw new Error(`${file} not found`);
//       return res.text();
//     })
//     .then((data) => {
//       document.getElementById(id).innerHTML = data;
//     })
//     .catch((err) => console.log(err));
// }

// [
//   { id: "nav", file: "component/nav.html" },
//   { id: "hero", file: "component/hero.html" },
//   { id: "skill", file: "component/skill.html" },
//   { id: "portfolio", file: "component/portfolio.html" },
//   { id: "contact", file: "component/contact.html" },
//   { id: "footer", file: "component/footer.html" },
// ].forEach((c) => loadComponent(c.id, c.file));

async function loadComponent(id, file) {
  const res = await fetch(file);

  if (!res.ok) throw new Error(`${file} not found`);

  const data = await res.text();
  document.getElementById(id).innerHTML = data;
}

// ⭐ รวมไว้ตรงนี้
async function init() {
  const components = [
    { id: "nav", file: "component/nav.html" },
    { id: "hero", file: "component/hero.html" },
    { id: "skill", file: "component/skill.html" },
    { id: "portfolio", file: "component/portfolio.html" },
    { id: "contact", file: "component/contact.html" },
    { id: "footer", file: "component/footer.html" },
  ];

  // ⭐ รอโหลดทั้งหมดก่อน
  await Promise.all(
    components.map((c) => loadComponent(c.id, c.file))
  );

  // ⭐ ค่อย scroll
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

init();
