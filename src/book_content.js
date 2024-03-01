
import './book_content_style.css';

function create_input(input_id, label_display, input_type) {
  const input_container = document.createElement('div');
  input_container.classList.add('input_container');
  const label = document.createElement('label');
  label.for = input_id;
  label.textContent = label_display + ': ';
  const input = document.createElement('input');
  input.type = input_type;
  input.id = input_id;
  input.name = input_type;
  input_container.appendChild(label);
  input_container.appendChild(input);

  return input_container;
}

const add_content = (main_element) => {

  const content_div = document.createElement('div');
  content_div.id = 'content_container'

  const book_form = document.createElement('form');
  book_form.id = 'book_form';

  const date_input_id = 'date_input';
  const date_label = 'Date';
  const date_input_type = 'date';
  const date_input_container = create_input(date_input_id, date_label, date_input_type)

  const time_input_id = 'time_input';
  const time_label = 'Time (Hour:Min AM/PM)';
  const time_input_type = 'time';
  const time_input_container = create_input(time_input_id, time_label, time_input_type)
  
  const guests_input_id = 'guests_input';
  const guests_label = 'Guests (Max: 30)';
  const guests_input_type = 'number';
  const guests_input_container = create_input(guests_input_id, guests_label, guests_input_type)
  const guests_input = guests_input_container.querySelector('input');
  guests_input.min = '1';
  guests_input.max = '30';

  const first_name_input_id = 'first_name_input';
  const first_name_label = 'First Name';
  const first_name_input_type = 'text';
  const first_name_container = create_input(first_name_input_id, first_name_label, first_name_input_type)

  const family_name_input_id = 'family_name_input';
  const family_name_label = 'Family Name';
  const family_name_input_type = 'text';
  const family_name_container = create_input(family_name_input_id, family_name_label, family_name_input_type)

  const info_input_container = document.createElement('div');
  info_input_container.classList.add('input_container');
  const info_label = document.createElement('label');
  info_label.for = 'info_input';
  info_label.textContent = 'Extra Information (allergies, etc.)' + ': ';
  const info_input = document.createElement('textarea');
  info_input.id = 'info_input';
  info_input.rows = '8';
  info_input_container.appendChild(info_label);
  info_input_container.appendChild(info_input);

  const submit_input_container = document.createElement('div');
  submit_input_container.classList.add('submit_container');
  const submit_btn = document.createElement('input');
  submit_btn.type = 'submit';
  submit_btn.value = 'Submit';
  const reset_btn = document.createElement('input');
  reset_btn.type = 'reset';
  reset_btn.value = 'Reset';
  submit_input_container.appendChild(submit_btn);
  submit_input_container.appendChild(reset_btn);

  book_form.appendChild(date_input_container);
  book_form.appendChild(time_input_container);
  book_form.appendChild(guests_input_container);
  book_form.appendChild(first_name_container);
  book_form.appendChild(family_name_container);
  book_form.appendChild(info_input_container);
  book_form.appendChild(submit_input_container);

  content_div.appendChild(book_form);

  main_element.appendChild(content_div);
}

export default add_content;

/*
date
time
how many
full name
extra info
*/