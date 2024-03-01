
import resto_front_img from './img/samuel-regan-asante-BPt2fnFrNAA-unsplash.jpg';
import './contact_content_style.css';

function add_hours(day, hours) {
  const day_container = document.createElement('div');
  day_container.classList.add('day_container');
  const week_day = document.createElement('p');
  week_day.classList.add('day');
  week_day.textContent = day;
  const hour = document.createElement('p');
  hour.classList.add('hour')
  hour.textContent = hours;
  day_container.appendChild(week_day);
  day_container.appendChild(hour);

  return day_container;
}


const add_content = (main_element) => {

  const content_div = document.createElement('div');
  content_div.id = 'contact_content_container';

  const resto_front_container = document.createElement('div')
  resto_front_container.id = 'resto_front_container';
  const resto_front = new Image();
  resto_front.src = resto_front_img;
  const resto_front_img_ref = document.createElement('p');
  resto_front_img_ref.innerHTML = 'Photo by <a href="https://unsplash.com/@reganography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Samuel Regan-Asante</a> on <a href="https://unsplash.com/photos/a-store-front-with-a-sign-and-a-bench-in-front-of-it-BPt2fnFrNAA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
  resto_front_container.appendChild(resto_front);
  resto_front_container.appendChild(resto_front_img_ref);
  content_div.appendChild(resto_front_container);

  const contact_info_container = document.createElement('div');
  contact_info_container.id = 'contact_info_container';
  const address_element = document.createElement('p');
  const address = '1234 Rue. St-Catherine, Montreal, Quebec, Canada H8A 2H9'
  address_element.textContent = address;
  const phone_number_element = document.createElement('p');
  const phone_number = '514-123-1234';
  phone_number_element.textContent = phone_number;
  const email_element = document.createElement('p');
  const email = 'loremipsum@gmail.com';
  email_element.textContent = email;
  contact_info_container.appendChild(address_element);
  contact_info_container.appendChild(phone_number_element);
  contact_info_container.appendChild(email_element);
  content_div.appendChild(contact_info_container);

  const hours_container = document.createElement('div')
  hours_container.id = 'hours_container';
  const mon_hour = '10:00 - 22:00'
  const mon_container = add_hours('Monday', mon_hour)
  hours_container.appendChild(mon_container);
  const tues_hour = '10:00 - 22:00'
  const tues_container = add_hours('Tuesday', tues_hour)
  hours_container.appendChild(tues_container);
  const wed_hour = '10:00 - 22:00'
  const wed_container = add_hours('Wednesday', wed_hour)
  hours_container.appendChild(wed_container);
  const thurs_hour = '10:00 - 22:00'
  const thurs_container = add_hours('Thursday', thurs_hour)
  hours_container.appendChild(thurs_container);
  const fri_hour = '10:00 - 00:00'
  const fri_container = add_hours('Friday', fri_hour)
  hours_container.appendChild(fri_container);
  const sat_hour = '11:00 - 00:00'
  const sat_container = add_hours('Saturday', sat_hour)
  hours_container.appendChild(sat_container);
  const sun_hour = '11:00 - 22:00'
  const sun_container = add_hours('Sunday', sun_hour)
  hours_container.appendChild(sun_container);
  content_div.appendChild(hours_container);

  main_element.appendChild(content_div);
}


export default add_content;