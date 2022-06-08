let symbols = '!\"#$%&\'()* +\,-\.\/:;<=>\?\@\[\]^_\`{\|}~';
let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = '0123456789';

const randomPassword = () => {
    let result = [];
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            result.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)])
        } else if (i % 3 === 0) {
            result.push(smallLetters[Math.floor(Math.random() * smallLetters.length)])
        } else if (i % 5 === 0) {
            result.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else {
            result.push(number[Math.floor(Math.random() * number.length)]);
        }
    }
    lib.innerHTML = result.reverse().join('');
};

const button = document.querySelector('button');
button.style.backgroundColor = `rgba(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.random()}
)`;
button.style.height = '8vh';
button.style.width = '12vw';
button.style.fontSize = '2rem';
button.style.borderRadius = '25px';

const div = document.querySelector('div');
div.style.backgroundColor = `rgba(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.random()}
)`;
div.style.fontSize = '2rem';
div.style.flexDirection = 'column';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.height = '50vh';
div.style.width = '70vw';
div.style.border = 'solid 2px';

const body = document.querySelector('body');
body.style.height = '90vh';
body.style.width = '90vw';
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';

const h1 = document.querySelector('h1');
h1.style.color = `rgba(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.random()}
)`;

const lib = document.querySelector("#showMe");
lib.style.fontFamily = "Covered By Your Grace";
const randomHex = () => {
    let result = [];
    let numAndStr = "1234567890ABCDEF";
    for (let i = 0; i < 6; i++) {
      result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
    }
    lib.innerHTML = result.join("");
    return result.join("");
  };
lib.style.color = `#${randomHex()}`;