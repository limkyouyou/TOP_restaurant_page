
import front_description from './front_description';

const add_content = (id) => {

  console.log('test1')

  const main_div = document.getElementById(id);

  const content_div = document.createElement('div');
  content_div.classList.add('content_container');

  const welcome_div = document.createElement('div');
  welcome_div.classList.add('welcome_content');

  const welcome_msg = document.createElement('h2');
  welcome_msg.classList.add('welcome_msg');
  welcome_msg.textContent = "Welcome to Lorem Ipsum"

  const description = document.createElement('p');
  description.classList.add('front_description');
  description.textContent = front_description;

  welcome_div.appendChild(welcome_msg);
  welcome_div.appendChild(description);
  
  content_div.appendChild(welcome_div);

  main_div.appendChild(content_div);
}

export default add_content;