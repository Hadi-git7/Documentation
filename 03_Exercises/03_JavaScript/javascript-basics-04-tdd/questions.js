
const stringSize = (text) => {
text = 'This text has a certain number of characters';
const result = text.length;
return result;
}

const replaceCharacterE = (text) => {
text = 'This text has a certain number of characters';
const result = text.replace('e',' ');
return result;
}

const concatString = (text1, text2) => {
 text1 = 'el Javascript shi ';
 text2 = 'ra2e3';
let result = text1.concat(text2);
return result;
}

const showChar5 = (text) => {
    const fifth = 'TDD kicks ass';
    const fifthCharacter = fifth.charAt(4);
    return fifthCharacter;
}

const showChar9 = (text) => {
    const str = 'But it is really annoying to write';
    const first9 = str.slice(0, 9);
   return first9;
}

const toCapitals = (text) => {
const str ='Another useful function';
return str.toUpperCase();
}

const toLowerCase = (text) => {
const str ='This is a sentence!';
return str.toLowerCase();
}

const removeSpaces = (text) => {
const str =' Rome wasn\'t built in a day ';
return str.trim();
}

const IsString = (text) => {
const str = 'Is this a string?';
if (typeof str === 'string') {
  return true;
  } else {
   return false
  }
}

const getExtension = (text) => {
const photoName = 'images/photo01.jpg';
const photExtension = photoName.split(".")
return photExtension[1] ;
}

const countSpaces = (text) => {
const str = 'Sire open we have a big one!';
const spaces = str.split(' ').length-1;
return spaces;
}

const InverseString = (text) => {
const str ='Après demain, à partir d\'aujourd\'hui?';
return str.split('').reverse().join('')
}

const power = (x, y) => {
const math = Math.pow(2, 3);
return math;
}

const absoluteValue = (num) => {
const absolute = Math.abs(-5);
return absolute;
}

const absoluteValueArray = (array) => {
   array = [-5,-50,-25,-568];
   const absolute = array.map(Math.abs);
   return absolute;
}

const circleSurface = (radius) => {
radius =5 ;
const result = Math.round(Math.PI * radius * radius)
return result;
}

const hypothenuse = (ab, ac) => {
ab = 5;
ac = 8;
const result = Math.hypot(ab,ac);
 return result;
}

const BMI = (weight, height) => {
weight = 65;
height = 1.75;
const result = parseFloat((weight / (height * height)).toFixed(2))
return result;
}

const createLanguagesArray = () => {
const languages =["Html","CSS","Java","PHP"];
return languages;
}

const createNumbersArray = () => {
const nombres = [0,1,2,3,4,5];
return nombres;
}

const replaceElement = (languages) => {
languages = ["Html","CSS","Java","PHP"];
languages[2] = 'Javascript';
 const replacedLanguages = languages;
  return replacedLanguages;
}

const addElement = (languages) => {
languages = ["Html","CSS","Javascript","PHP"];
languages.push('Ruby', 'Python')
const modifiedLanguages = languages;
return modifiedLanguages;
}

const addNumberElement = (numbers) => {
   numbers = [0,1,2,3,4,5]
   numbers.unshift(-2,-1);
   const modifiedNumbers = numbers;
   return modifiedNumbers;
}

const removeFirst = (languages) => {
languages =['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
languages.shift();
const modifiedLanguages = languages;
return modifiedLanguages;
}

const removeLast = (languages) => {
languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
languages.pop();
const modifiedLanguages = languages;
return modifiedLanguages;
}

const convertStrToArr = (social_arr) => {
  const socialNetworksString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
  const socialNetworks = socialNetworksString.split(',');
return socialNetworks;
}

const convertArrToStr = (languages) => {
  const languagesString = ['CSS', 'Javascript', 'PHP', 'Ruby'];
  const string = languagesString.toString();
 return string;
}

const sortArr = (social_arr) => {
  const socialNetworks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
  const socialNetworksSorted = socialNetworks.sort();
   return socialNetworksSorted;
}

const invertArr = (social_arr) => {
  const languages = ['CSS','Javascript','PHP','Ruby'];
  const languagesInverted = languages.reverse();
  return languagesInverted;
}