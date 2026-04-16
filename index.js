const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu"); 
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const btn1 = document.getElementById("btn1");
  const menu1 = document.getElementById("menu1");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });


let search = false;

btn1.addEventListener("click", (event) => {
  search = !search;
    event.stopPropagation();
  if (search) {
  btn1.classList.add("active");
  overlay.classList.add("active");
  } else {
  btn1.classList.remove("active");
   overlay.classList.remove("active");
  }
});


menu1.addEventListener("click", (event) => {
  event.stopPropagation();
});

