//Variables
let currentTempC =22;
//console.log(currentTempC);
let targetTempC; //equivalent to "let targetTempC = undefined"
//console.log(targetTempC);
let varable1, room1=" conference_room_a ", room2=" looby ";
//console.log(varable1 + room1 + room2);

//Constant
const Room_TEMP_C =21.5, MAX_TEMP_C = 30;

let count =10; //integer literal; count is still double
const blue = 0x0000ff; //hexadecimal (hex ff = decimal 255)
//console.log(blue);//show 255
const umask = 0o0022;//octal (octal 22 = decimal 18)
//console.log(umask);//show 18
const roomTemp = 21.5 //decimal
//console.log(roomTemp);
const c = 3.0e6;//exponential (3.0 x 10^6 = 3,000,000)
//console.log(c);//show 3000000
const e = -1.6e-19;// exponential -1.6 x 10^-19 = 0.00000000000000000016  
//console.log(e);//show -1.6e-19
const inf = Infinity;
//console.log(inf);//show Infinity
const ninf = -Infinity;
//console.log(ninf);//show -Infinity
const nan = NaN; // not a number
//console.log(nan);//show NaN
const small = Number.EPSILON; //The smallest value that can be added to 1 to get a distinct number
//console.log(small);//show 2.220446049250313e-16
const bigInt = Number.MAX_SAFE_INTEGER;//The largest representable integer
//console.log(bigInt);//show 9007199254740991
const max = Number.MAX_VALUE;//The largest representable number
//console.log(max);//show 1.7976931348623157e+308
const min = Number.MIN_SAFE_INTEGER;//The smallest representable integer
//console.log(min);//show -9007199254740991
const nIng = Number.NEGATIVE_INFINITY;//the same as -Infinity
//console.log(nIng);//show -Infinity
const nan2 = Number.NaN; // the same as NaN
//console.log(nan2);//show NaN
const inf2 = Number.POSITIVE_INFINITY; //The same as Infinity
//console.log(inf2);//Infinity
const newLine = "Line1\nLine2";
//console.log(newLine);
const carriageReturn = "Windows line1\r\nWindow line2";
//console.log(carriageReturn);
const tab= "Speed:\t60kph";
//console.log(tab);
const singleQuote ="Don\'t";
//console.log(singleQuote);//show Don't
const doubleQuote ='Sam said \"hello\".';
//console.log(doubleQuote);
const backtick =`New in ES6: \` strings.`;
//console.log(backtick);//show New in ES6: ` strings.
let interpolation ="\${Template Strings}";
const dollarSign = `New in ES6: ${interpolation}`;
//console.log(dollarSign);//New in ES6: ${Template Strings}
const backSlash ="use \\\\ to represent\\!";
//console.log(backSlash);//show use \\ to represent\!
const arbitraryUnicode ="De Morgan's law:\u2310(p \u22c0Q) \u21D4(\u2310P) \u22c1(\u2310Q)";
//console.log(arbitraryUnicode);//show De Morgan's law:⌐(p ⋀Q) ⇔(⌐P) ⋁(⌐Q)
const latin_1Character= "\xc9p\xe9e is fun, but foil is more fun.";
//console.log(latin_1Character);//show Épée is fun, but foil is more fun.
const nullCharacter= "ASCII Null :\0";//ASCII/Unicode 1
//console.log(nullCharacter);//show ASCII Null :
const verticalTab = "Vertical tab: \v";//ASCII/Unicode 11
//console.log(verticalTab);//show Vertical tab: 
const backSpace= "Backspace: \b";//ASCII//Unicode 8
//console.log(backSpace);//show Backspace: 
const formFeed = "Form feed: \f";//ASCII/Unicode 12
//console.log(formFeed);//show Form feed: 

//Template Strings
let currentTem = 19.5;
const message = `The current temperature is ${currentTem}\u00b0c`;
console.log(message);//The current temperature is 19.5°c

//...............................................................
var name = "Bob";
var str = `Hello ${name}, how are you this fine ${partOfDay()}?`
console.log(str);//Hello Bob, how are you this fine evening?

function partOfDay () {
    var hours = new Date().getHours();

    if (hours <= 12) {
        return "morning";
    } else if (hours <= 5) {
        return "afternoon";
    } else {
        return "evening";
    }
}

// Output:
// Hello Bob, how are you this fine afternoon?
