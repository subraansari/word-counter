#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter Your Sentence to count the words:"
    }
]);
const words = answers.Sentences.trim().split(" ");
console.log(words);
console.log(`Your Sentence Word Count is ${words.length}`);
