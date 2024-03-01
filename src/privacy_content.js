
import './privacy_content_style.css';

const add_content = (main_element) => {

  const content_div = document.createElement('div');
  content_div.id = 'privacy_content_container';

  const privacy_title = document.createElement('p');
  privacy_title.id = 'privacy_title';
  privacy_title.textContent = 'Privacy Policy';
  content_div.appendChild(privacy_title);

  const privacy = document.createElement('p');
  privacy.id = 'privacy';
  privacy.textContent = "Donec blandit, turpis at convallis feugiat, risus ligula cursus ipsum, eu viverra urna risus sit amet leo. Integer sodales placerat sem, at varius ante pharetra id. In quis purus viverra, hendrerit nunc tristique, interdum dolor. Etiam id velit elit. Suspendisse dictum fringilla auctor. Vestibulum tempus lacinia sem, nec varius nisi. Morbi ligula elit, cursus nec tempor eu, ultrices vitae risus. Mauris quis nisl sapien. Sed id pulvinar dui, quis posuere felis. Duis nec luctus velit, sed ultrices nisl. Sed vulputate metus vulputate urna porttitor placerat gravida sed purus. Maecenas sed feugiat est.";
  content_div.appendChild(privacy);

  main_element.appendChild(content_div);
}

export default add_content;