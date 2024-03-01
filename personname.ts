let personname = "muhammad Yousuf saleem";
const uppercasedName = personname.toUpperCase();
console.log(uppercasedName);
const lowercasedName = personname.toLowerCase();
console.log(lowercasedName);
console.log(personname.replace(/\b\w/g, (char) => char.toUpperCase()))
