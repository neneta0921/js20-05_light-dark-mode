const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitch = document.querySelector('input[type="checkbox"]');

document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();

  // Check Local Storage For Theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
      toggleSwitch.checked = true;
      main.toggleDarkLightMode(true);
    }
  }
});

class Main {
  constructor() {
    this.nav = document.querySelector('#nav');
    this.toggleIcon = document.querySelector('#toggle-icon');
    this.image1 = document.querySelector('#image1');
    this.image2 = document.querySelector('#image2');
    this.image3 = document.querySelector('#image3');
    this.textBox = document.querySelector('#text-box');

    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Dark or Light Image
  _imageMode(color) {
    this.image1.src = `img/undraw_proud_coder_${color}.svg`;
    this.image2.src = `img/undraw_feeling_proud_${color}.svg`;
    this.image3.src = `img/undraw_conceptual_idea_${color}.svg`;
  }

  toggleDarkLightMode(isDark) {
    this.nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    this.textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    this.toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark
      ? this.toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
      : this.toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? this._imageMode(DARK_THEME) : this._imageMode(LIGHT_THEME);
  }

  // Switch Theme Dynamically
  _switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', DARK_THEME);
      localStorage.setItem('theme', DARK_THEME);
      this.toggleDarkLightMode(true);
    } else {
      document.documentElement.setAttribute('data-theme', LIGHT_THEME);
      localStorage.setItem('theme', LIGHT_THEME);
      this.toggleDarkLightMode(false);
    }
  }

  _addEvent() {
    // Event Listener
    toggleSwitch.addEventListener('change', this._switchTheme.bind(this));
  }
}
