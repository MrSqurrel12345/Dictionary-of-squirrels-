console.log('Hello!');
function onsubmit() {
  const question1ans = document.getElementsByName('question1');
}
const button = document.getElementById('button');
button?.addEventListener('click', () => {
  handleSubmitForm();
});

export function handleSubmitForm() {
const questoin1 = document.querySelector(
'input[name question"]:checked'
).value;
console.log(question1);
}
