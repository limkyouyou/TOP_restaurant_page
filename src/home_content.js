
import front_description from './front_description';
import dining_img from './img/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import './home_content_style.css';

const add_content = (main_element) => {

  const content_div = document.createElement('div');
  content_div.classList.add('content_container');

  const welcome_div = document.createElement('div');
  welcome_div.id = 'welcome_content'

  const welcome_msg = document.createElement('h2');
  welcome_msg.id = 'welcome_msg';
  welcome_msg.classList.add('welcome_msg');
  welcome_msg.textContent = "Welcome to Lorem Ipsum"

  const img_container = document.createElement('div');
  img_container.id = 'img_container';
  const front_img = new Image();
  front_img.src = dining_img;
  front_img.id = 'front_img';
  img_container.appendChild(front_img);
  img_container.innerHTML += '<p>Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>';

  const description = document.createElement('p');
  description.id = 'front_description';
  description.textContent = front_description;

  welcome_div.appendChild(welcome_msg);
  welcome_div.appendChild(img_container);
  welcome_div.appendChild(description);
  
  content_div.appendChild(welcome_div);

  main_element.appendChild(content_div);
}

export default add_content;