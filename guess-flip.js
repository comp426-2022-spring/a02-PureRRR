// Import the coinFlip function from your coin.mjs file

import {coinFlip, flipACoin} from './modules/coin.mjs' 
import minimist from 'minimist'


// Call the coinFlip function and put the return into STDOUT

var args = minimist(process.argv.slice(2))

var call = args.call

if(call!=='heads'&&call!=='tails') {
	throw('invalid input!\n Usage: node guess-flip --call=[heads|tails]')
}

var flip = coinFlip();

console.log(
		{call, 
		flip, 
		result:call===flip?'win':'lose'
		}
);


