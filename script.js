function show(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// contador animado
let counter = document.getElementById("counter");
let target = 270200; // cambia este número
let count = 0;

let interval = setInterval(() => {
  count += 3000;
  counter.innerText = count.toLocaleString();
  if (count >= target) {
    counter.innerText = target.toLocaleString();
    clearInterval(interval);
  }
}, 20);
