// Cat object

const myCat = {
    catName: "Gini",
    age: 9,
    color: "Ginger",
    castrated: true
};

// Display on the console:

console.log(myCat);

// Convert to JSON:

const jasonString = JSON.stringify(myCat);

// Display the string to the user (alert):

alert(jasonString);

// Convert back to javaScript object:

const yourCat = JSON.parse(jasonString);

// Print the new object on the page:

document.write(`Name: ${yourCat.catName}<br> Age: ${yourCat.age}<br> Color: ${yourCat.color}<br> Castrated: ${yourCat.castrated}`);
