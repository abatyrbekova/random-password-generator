// const items = document.querySelectorAll(".shopping li");
const lib = document.querySelector("#showMe");
// console.log(items);
let symbols = ' !\"#$%&\'() * +\,-\.\/: ;<=>\?\@\[\]^ _\`{\|}~';
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