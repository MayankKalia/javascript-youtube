# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-j9bvwd?file=1-colorChanger%2Fchaiaurcode.js,index.html)

# Solution Code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); //this tells From Where this Event is coming from
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2 solution

```javascript
const form = document.querySelector('form');
//this use case will give you empty values
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = '';
    if (bmi < 18.6) {
      message = 'You are Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'You are in Normal Range';
    } else {
      message = 'You are Overweight';
    }

    //show the result
    results.innerHTML = `<p>Your BMI is <span>${bmi}</span></p><p>${message}</p>`;
  }
});

// "form" usually gets submitted via 2 types, i.e by GET type or POST type, whenever it gets submitted it's values goes to the URL or to the Server, we have to stop it, the default action

```
