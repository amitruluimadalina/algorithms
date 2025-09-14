import { debounce, throttle } from "./helpers.js";

const initMobileMenu = () => {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector("#navbar-menu");

  if (!menu || !menuLinks) {
    return;
  }

  const toggleMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  };

  menu.addEventListener("click", toggleMenu);
};

const initDebounceOutputDisplay = () => {
  const inputField = document.querySelector("#inputField");
  const output = document.querySelector("#output");

  if (!inputField || !output) {
    return;
  }

  inputField.addEventListener(
    "input",
    debounce((event) => {
      output.textContent = `You typed: ${event.target.value}`;
    }, 300)
  );
};
//look for query selectors
const initThrottleOutputDisplay = () => {
  const throttleBtn = document.querySelector("#throttle-button");
  const output = document.querySelector("#output-throttle");

  if (!throttleBtn || !output) {
    return;
  }

  throttleBtn.addEventListener(
    "click",
    throttle(() => {
      output.textContent = "Click";
    }, 300)
  );
};

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initDebounceOutputDisplay();
  initThrottleOutputDisplay();
});
