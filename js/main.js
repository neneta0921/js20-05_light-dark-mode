const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();

  // On Load,  Check Local Storage For Theme
  main.checkCurrentTheme();
});

class Main {
  constructor() {
    this.toggleSwitch = document.querySelector('input[type="checkbox"]');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Dark or Light Image
  _imageMode(color) {
    for (let i = 1; i < 4; i++) {
      `const image${i} = document.querySelector(#image${i})`;
    }
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
  }

  _toggleDarkLightMode(isDark) {
    const nav = document.querySelector('#nav');
    const toggleIcon = document.querySelector('#toggle-icon');
    const textBox = document.querySelector('#text-box');
    const white = 'rgb(255 255 255 / 50%)';
    const black = 'rgb(0 0 0 / 50%)';

    nav.style.backgroundColor = isDark ? black : white;
    textBox.style.backgroundColor = isDark ? white : black;
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark
      ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
      : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? this._imageMode(DARK_THEME) : this._imageMode(LIGHT_THEME);
  }

  // Switch Theme Dynamically
  _switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', DARK_THEME);
      localStorage.setItem('theme', DARK_THEME);
      this._toggleDarkLightMode(true);
    } else {
      document.documentElement.setAttribute('data-theme', LIGHT_THEME);
      localStorage.setItem('theme', LIGHT_THEME);
      this._toggleDarkLightMode(false);
    }
  }

  checkCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === DARK_THEME) {
        this.toggleSwitch.checked = true;
        this._toggleDarkLightMode(true);
      }
    }
  }

  _addEvent() {
    // Event Listener
    this.toggleSwitch.addEventListener('change', this._switchTheme.bind(this));
  }
}
