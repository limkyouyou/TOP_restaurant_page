
import './main_style.css';
import add_content from "./home_content";
//import main_logo from "./img/logo/svg/no_background_logo.svg"
import main_logo from "./img/logo/png/no_background_logo.png"
//import main_logo from "./test.jpg"



const dom_interface = (function () {
  const logo_container = document.getElementById('logo_container');
  const logo_img = new Image();
  logo_img.src = main_logo;
  logo_img.id = 'logo_img';
  logo_container.appendChild(logo_img);

  const main_content_div_id = 'content';
  add_content(main_content_div_id);

  const footer_container = document.getElementById('footer_container');
  const privacy_link = document.createElement('a');
  privacy_link.textContent = "Privacy Policy";
  privacy_link.href = "";
  footer_container.appendChild(privacy_link);
})();