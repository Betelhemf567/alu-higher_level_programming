#!/usr/bin/node
const myArgs = process.argv.slice(2);
function checkArguments() {
  if (arguments.length === 0) {
    console.log('No Argument');
  } else if (arguments.length === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
}
