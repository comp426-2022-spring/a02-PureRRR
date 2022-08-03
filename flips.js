// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs' 
import minimist from 'minimist'

// Call the coinFlip function and put the return into STDOUT

var args = minimist(process.argv.slice(2))

var number = args.number||1

var array = coinFlips(number);

console.log(array);

console.log(countFlips(array));
