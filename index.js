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

const body = document.querySelector('body');
body.style.backgroundColor = `rgba(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.random()}
)`;
body.style.fontSize = '2rem';
body.style.flexDirection = 'column';
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.height = '50vh';
// body.style.weight = '50vw';  // ???
body.style.border = 'solid';

const h1 = document.querySelector('h1');
h1.style.color = `rgba(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.random()}
)`;


const lib = document.querySelector("#showMe");
// lib.style.fontFamily = "'Kalam', cursive"; // -?????
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