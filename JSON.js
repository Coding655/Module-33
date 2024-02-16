const user = { id: 1, name: " giribuddin amir", job: "actor"};
/* JSON: javaScript Object Notation */

const JS = " javaScript Object Notation";
const JSR = JSON.stringify(JS);
// console.log(JSR);


// console.log(user);

const shop = {
    Owner: "Alia",
    Address: {
        Street: "new town",
        City: " Dinajpur",
        Country: " Bangladesh ",
    },
    Products: ["laptop", 'mic', " monitor ", "keyBoard "],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);

/* What is the difference between stringify and parse ???? (IMPORTANT) */