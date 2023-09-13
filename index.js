const showBtn = document.querySelectorAll("scrollTop__img");

window.onscroll = () => {
  if (window.scrollY > 900) {
    showBtn.classList.remove("scrollTop__img_hide");
  }
};
