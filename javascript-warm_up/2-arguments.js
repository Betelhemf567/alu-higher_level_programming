#!/usr/bin/node
const myArgs = process.argv.slice(2);

function checkArguments () {
  if (myArgs.length === 0) {
    console.log('No Argument');
  } else if (myArgs.length === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }