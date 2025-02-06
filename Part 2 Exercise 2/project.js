const friend = "BRUTUS"
const shiftValue = 3;

/*Step 1*/

const alphabet = ("abcdefghijklmnopqrstuvwxyz");

/*Step 2*/

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());


/*Step 3*/

const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];



/*Question 1*/

/* Answer: Because indexes start with zero*/


/*Question 2*/
/*The modulus operator %*/


/*Step 4*/

const alphabetLength = alphabet.length;



/*Step 5*/

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];



/*Step 6*/

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
