const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 
  let codeWords = Array.from(expr); //?
  let res = [];
  let a = 0;
  let b = 10;
  for (i = 0; i < codeWords.length / 10; i = i+1) {
    res.push(codeWords.slice(a, b).join('')); //?
    a = a + 10;
    b = b + 10;
   
  }

  const result = res.map((e) => (e !== "**********" ? e.replace(/^[^1]+/, '') : e))
  .map((e) =>   (e === "**********" ? " " : e));//?

  

  let morseCode = result.map((item) => 
  item.match(/.{1,2}/g)
  .map((elem) => {
    if(elem === '10') return '.';//?
    if(elem === '11') return '-';//?
    
    return elem;//?
     }).join('')//?
    
  );
  
return morseCode.map((elem) => 
    (elem !== ' '? MORSE_TABLE[elem]: elem))//?
  .join("")// ?
}


module.exports = {
    decode
}