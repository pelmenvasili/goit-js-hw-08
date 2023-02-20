import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const textAreaRef = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
const inputRef = document.querySelector('input[name="email"]');
const formData = {};

const onTextAreaChange = evt => {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
};

const onFormSubmit = evt => {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

textAreaRef.addEventListener('input', throttle(onTextAreaChange, 500));
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const fillingTextArea = () => {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    textAreaRef.value = savedMessage.message;
    inputRef.value = savedMessage.email;
  }
};

fillingTextArea();
