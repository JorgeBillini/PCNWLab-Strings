/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
  /* git show -p #commitkey number
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/ 
const makeEven = str => { 
    if (str.length % 2 !== 0) {
        return str+'#'
    }
     return str;
}
console.log('#### MakeEven')
console.log(makeEven('taq'));
console.log(makeEven('john'));
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/
const getLastChar = str => {
   const whatup = str[str.length-1];
    return whatup;
}
console.log("##### 2 getlastChar");
console.log(getLastChar('taq'));
/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

const get3rdChar = str => {
    if (str.length < 3 ) { 
        return 'not enough characters'
    }
  const  whatup = str.charAt(2)
    return whatup;
}
console.log('##### 3 get 3rd Chard')
console.log(get3rdChar('taq'));
console.log(get3rdChar('This is my third character test'))

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str => { 
    if (str.length < 3){
        return 'not enough chararcters'
    }
    return str.slice(-3,-2);
    //return whatup;
}
console.log('###### 4 get3rdCharFromEnd')
console.log(get3rdCharFromEnd('taq'));
console.log(get3rdCharFromEnd('cookie'));

/*
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
const vowelcheck = (str) => { 
    if (str[0] === 'a') {
        return true;
    }
    if (str[0] === 'e'){
        return true;    
    }
    if (str[0] === 'i') { 
        return true;
    }
    if (str[0] == 'o'){
        return true
    }
    if (str[0] === 'u') {
        return true;
    }
    return false;
}
const startsWithVowel = (str) =>  {
    
    return  vowelcheck(str.toLowerCase());
}
console.log('#### 5 StartsWithVowel')

console.log(startsWithVowel('tis a test'));
console.log(startsWithVowel("OLA"));

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/
const vowelCheckEnd = (str) => {
    if (str[str.length-1] === 'a'){
        return true;
    }
    if (str[str.length-1] === 'e'){
        return true;
    }
    if (str[str.length-1] === 'i'){
        return true;
    }
    if (str[str.length-1] === 'o'){
        return true;
    }
    if (str[str.length-1] === 'u'){
        return true;
    }
    return false;
}
const  endsWithVowel = (str) => { 
    return vowelCheckEnd(str.toLowerCase());
}
console.log('######6 endsWithVowel');
console.log(endsWithVowel('Hola'));
console.log(endsWithVowel('klk'));


/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
const hasVowels = str => str.match(/[aeiou]/) ? true:false
console.log('###7 hasvowels');
console.log(hasVowels('taq'));

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/
const hasUpperCase = str => str.match(/[A-Z]/) ? true:false;
console.log('####8 hasUpperCase');
console.log(hasUpperCase('tAq'));
console.log(hasUpperCase('TAQ'));
console.log('######################')

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/
const isPalindromic = (str) => {
    if (typeof str !=='string') {
return 'invalid input'
    }
    const rangefrom = /[\W_]/g;
    const lowercasedstr = str.toLowerCase().replace(rangefrom, '');
    const reversedstring = lowercasedstr.split('').reverse().join('');
    if (reversedstring === lowercasedstr){
        return true
    }
    return false;
}
console.log('##### 9 IsPalindrome#################')
console.log(isPalindromic('racecar')); //true
console.log(isPalindromic('bats see bees stab')); // true
console.log(isPalindromic('taq karim')); // false
console.log(isPalindromic('racecars')); // false
console.log('######################################')
/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/
const perfectStrCount = (str) => {
    if (str.length >= 3) {
        return true;
    }
    return false;
}
const thatVowelCheck = (str,position) => {
    if (str.charAt(position) == "a") {
        return true;
    }
    if (str.charAt(position) == "e") {
        return true;
    }
    if (str.charAt(position) == "i") {
        return true;
    }
    if (str.charAt(position)== "o") {
        return true;
    }
    if (str.charAt(position) == "u") {
        return true;
    }
    return false;
     
 
}
const consonantCheck = (str) => {

    if (str[1] !== "a") {
        return true;
    }
    if (str[1] !== "e") {
        return true;
    }
    if (str[1] !== "i") {
        return true;
    }
    if (str[1] !== "o") {
        return true;
    }
    if (str[1] !== "u") {
        return true;
    }
    return false;
    
}

const isPerfectStr = (str) => {
const firstCheck = perfectStrCount(str);
const checkForVowels = thatVowelCheck(str.toLowerCase(),0);
const checkForconsonant = thatVowelCheck(str.toLowerCase());
const checkForVowels2 = thatVowelCheck(str.toLowerCase(),2);
if (firstCheck === true && checkForVowels === true && checkForconsonant === true && checkForVowels2 === true)
{
    return true;
}
return false;
}
console.log('######### 11 isPerfectStr');
 console.log(isPerfectStr('aba'));
 console.log(isPerfectStr('asdfaeKeccccc'));
 
/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/
const strMasher = (str1, str2) => { 
    const middleIndex = Math.ceil(str1.length / 2);
    const firstHalf = str1.slice(0, middleIndex);
    const secondHalf =  str1.slice(middleIndex,str1.length); // if you give it a start index the ending index is optional
    return firstHalf + str2 + secondHalf;
}
console.log (strMasher('help', 'me'));
console.log(strMasher('hello', 'wrold'));
