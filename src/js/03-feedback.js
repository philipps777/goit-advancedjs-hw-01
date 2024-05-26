import throttle from 'lodash.throttle';
const selectors = {
  form: document.querySelector('.feedback-form'),
  LS: 'feedback-form-state',
};

let formData = {};
loadFormData();

selectors.form.addEventListener('input', throttle(handleInput, 500));
selectors.form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const form = event.currentTarget;
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(selectors.LS, JSON.stringify(formData));
}
function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(selectors.LS);
  console.log(formData);
  formData = {};
}
function loadFormData() {
  try {
    const saveData = localStorage.getItem(selectors.LS);
    if (!saveData) return;
    formData = JSON.parse(saveData);
    Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  } catch ({ message }) {
    console.log(message);
  }
}
