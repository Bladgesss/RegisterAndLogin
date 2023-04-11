const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPop = document.querySelector(".btnLogin-popup");
const closeBtn = document.querySelector(".icon-close");


registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
})


btnPop.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
})

closeBtn.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
})

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
})