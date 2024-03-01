
import './main_style.css';
import add_home_content from "./home_content";
import add_menu_content from "./menu_content";
import add_book_content from "./book_content";
import add_contact_content from "./contact_content";
import add_privacy_content from "./privacy_content";
//import main_logo from "./img/logo/svg/no_background_logo.svg"
import main_logo from "./img/logo/png/no_background_logo.png"
//import main_logo from "./test.jpg"



const dom_interface = (function () {
  const logo_container = document.getElementById('logo_container');
  const logo_img = new Image();
  logo_img.src = main_logo;
  logo_img.id = 'logo_img';
  logo_container.appendChild(logo_img);

  const main_div = document.getElementById('content');
  //add_book_content(main_div);
  add_home_content(main_div);
  //add_privacy_content(main_div);
  //add_menu_content(main_div);
  //add_contact_content(main_div);

  const footer_container = document.getElementById('footer_container');
  const privacy_link = document.createElement('a');
  privacy_link.id = 'privacy_link';
  privacy_link.textContent = "Privacy Policy";
  footer_container.appendChild(privacy_link);

  const buttons_list = document.getElementsByClassName('nav_btn');
  function remove_active() {
    for (let button of buttons_list) {
      button.classList.remove('active');
    }
  }

  function remove_all_child() {
    while (main_div.firstChild) {
      main_div.removeChild(main_div.lastChild);
    }
  }

  const home_btn = document.getElementById('home_btn');
  home_btn.addEventListener('click', () => {
    
    remove_active();
    home_btn.classList.add('active');

    remove_all_child();

    add_home_content(main_div);
  });

  const menu_btn = document.getElementById('menu_btn');
  menu_btn.addEventListener('click', () => {
    
    remove_active();
    menu_btn.classList.add('active');

    remove_all_child();

    add_menu_content(main_div);
  });

  const book_btn = document.getElementById('book_btn');
  book_btn.addEventListener('click', () => {
    
    remove_active();
    book_btn.classList.add('active');

    remove_all_child();

    add_book_content(main_div);
  });

  const contact_btn = document.getElementById('contact_btn');
  contact_btn.addEventListener('click', () => {
    
    remove_active();
    contact_btn.classList.add('active');

    remove_all_child();

    add_contact_content(main_div);
  });

  privacy_link.addEventListener('click', () => {

    remove_active();

    remove_all_child();

    add_privacy_content(main_div);
  });

  logo_img.addEventListener('click', () => {

    remove_active();
    home_btn.classList.add('active');

    remove_all_child();

    add_home_content(main_div);
  });

})();