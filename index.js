const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu"); 
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const btn1 = document.getElementById("btn1");

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

btn1.addEventListener("click", () => {
  search = !search;
  if (search) {
    btn1.classList.add("active");
  } else {
    btn1.classList.remove("active");
  }
});
