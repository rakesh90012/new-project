const btn = document.querySelector(".btn");
const modal = document.querySelector(".message2");
const closeBtn = document.querySelector("i");
const message = document.querySelector("message1")

btn.addEventListener("click", function () {
  message.innerHTML = `
  <div class="message2">
  <i class="fa-solid fa-xmark"></i>
  <h3> Modal Content </h3>
</div>    
  `
});
closeBtn.addEventListener("click", function () {
  closeBtn.classList.remove("message1");
});