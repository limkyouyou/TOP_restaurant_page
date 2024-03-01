
import meal_1 from './img/victoria-shes-UC0HZdUitWY-unsplash.jpg';
import meal_2 from './img/chad-montano-MqT0asuoIcU-unsplash.jpg';
import meal_3 from './img/brooke-lark-oaz0raysASk-unsplash.jpg';
import meal_4 from './img/chad-montano--GFCYhoRe48-unsplash.jpg';
import meal_5 from './img/emile-mbunzama-cLpdEA23Z44-unsplash.jpg';
import meal_6 from './img/diliara-garifullina-Gx_vsiMRgzk-unsplash.jpg';
import './menu_content_style.css';

function add_menu(img, ref, price, description) {
  const meal_container = document.createElement('div');
  meal_container.classList.add('meal_container');

  const meal_img_container = document.createElement('div');
  meal_img_container.classList.add('meal_img_container');

  const menu_img = new Image();
  menu_img.src = img;
  menu_img.classList.add('menu_img');
  
  const menu_ref = document.createElement('p');
  menu_ref.innerHTML = ref;
  meal_img_container.appendChild(menu_img);
  meal_img_container.appendChild(menu_ref);

  const menu_price = document.createElement('p');
  menu_price.classList.add('price');
  menu_price.textContent = price;

  const menu_description = document.createElement('p');
  menu_description.classList.add('menu_description');
  menu_description.textContent = description;

  meal_container.appendChild(meal_img_container);
  meal_container.appendChild(menu_price);
  meal_container.appendChild(menu_description);

  return meal_container;
}

const add_content = (main_element) => {

  const content_div = document.createElement('div');
  content_div.id = 'menu_content_container';

  let meal_1_ref = 'Photo by <a href="https://unsplash.com/@victoriakosmo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victoria Shes</a> on <a href="https://unsplash.com/photos/grilled-meat-and-vegetable-on-the-table-UC0HZdUitWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  let price_1 = '$40';
  let description_1 = "Etiam pretium sodales mi quis convallis. Nulla ac nunc iaculis, feugiat metus vitae, consequat nisl. Pellentesque consectetur euismod risus vel rutrum.";
  const meal_1_container = add_menu(meal_1, meal_1_ref, price_1, description_1);
  
  let meal_2_ref = 'Photo by <a href="https://unsplash.com/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chad Montano</a> on <a href="https://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  let price_2 = '$30';
  let description_2 = "Nullam ac tincidunt enim. Morbi aliquet libero libero, non tincidunt mauris cursus eu. Proin iaculis dolor vitae lorem vulputate vulputate quis fringilla lectus.";
  const meal_2_container = add_menu(meal_2, meal_2_ref, price_2, description_2);

  let meal_3_ref = 'Photo by <a href="https://unsplash.com/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Lark</a> on <a href="https://unsplash.com/photos/top-view-salad-with-guacamole-oaz0raysASk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  let price_3 = '$27';
  let description_3 = "Mauris eget purus nec mauris aliquam bibendum. Ut in libero nunc. Suspendisse potenti. Fusce vulputate, purus sit amet ultricies egestas, lorem velit congue dui, sit amet porttitor augue orci at orci.";
  const meal_3_container = add_menu(meal_3, meal_3_ref, price_3, description_3);

  let meal_4_ref = 'Photo by <a href="https://unsplash.com/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chad Montano</a> on <a href="https://unsplash.com/photos/burgers--GFCYhoRe48?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  let price_4 = '$20';
  let description_4 = "Aliquam tortor risus, porta eu sem quis, finibus bibendum lorem. Nullam in quam sed nisi dapibus rhoncus. Integer finibus justo eros, fringilla mattis quam tristique eget. Maecenas ut efficitur ante. Mauris vehicula gravida condimentum.";
  const meal_4_container = add_menu(meal_4, meal_4_ref, price_4, description_4);

  let meal_5_ref = 'Photo by <a href="https://unsplash.com/@emilembunzama?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emile Mbunzama</a> on <a href="https://unsplash.com/photos/oreo-cookie-sandwiches-dessert-in-short-stem-glass-cLpdEA23Z44?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  let price_5 = '$13';
  let description_5 = "Aliquam consectetur, tellus non feugiat tempor, magna metus blandit diam, sed sollicitudin tellus urna non mi. Vestibulum sit amet metus eget orci tempor tempor.";
  const meal_5_container = add_menu(meal_5, meal_5_ref, price_5, description_5);

  let meal_6_ref = 'Photo by <a href="https://unsplash.com/@dilja96?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diliara Garifullina</a> on <a href="https://unsplash.com/photos/strawberry-and-banana-on-white-ceramic-plate-Gx_vsiMRgzk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  let price_6 = '$16';
  let description_6 = "Vivamus nisl magna, mollis eu dui non, iaculis efficitur libero. Aliquam lobortis luctus ipsum, nec tristique sem commodo in.";
  const meal_6_container = add_menu(meal_6, meal_6_ref, price_6, description_6);

  content_div.appendChild(meal_1_container);
  content_div.appendChild(meal_2_container);
  content_div.appendChild(meal_3_container);
  content_div.appendChild(meal_4_container);
  content_div.appendChild(meal_5_container);
  content_div.appendChild(meal_6_container);

  main_element.appendChild(content_div);
}


export default add_content;