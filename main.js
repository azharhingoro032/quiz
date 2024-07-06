import inquirer from "inquirer";
import chalk from "chalk";
const questions = [
    {
        question: "TypeScript is a superset of which programming language?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What is the file extension for TypeScript files?",
        options: [".js", ".java", ".ts", ".py"],
        answer: ".ts"
    },
    {
        question: "Which tool is used to transpile TypeScript?",
        options: ["Babel", "Gulp", "tsc (TypeScript Compiler)", "Webpack"],
        answer: "tsc (TypeScript Compiler)"
    },
    {
        question: "What is the enum keyword used for in TypeScript?",
        options: ["Defining functions", "Defining variables", "Defining named constants", "Defining classes"],
        answer: "Defining named constants"
    },
    {
        question: "What is the syntax for type assertion in TypeScript?",
        options: ["<type>variable", "variable as type", "Both (A and B)", "type variable"],
        answer: "Both (A and B)"
    },
    {
        question: "How are optional properties denoted in TypeScript?",
        options: ["property*", "property?", "property!", "property??"],
        answer: "property?"
    },
    {
        question: "What is the readonly keyword used for in TypeScript?",
        options: ["Making variables immutable", "Making functions immutable", "Making properties immutable", "Making classes immutable"],
        answer: "Making properties immutable"
    },
    {
        question: "Which access modifier is not present in TypeScript?",
        options: ["Public", "Private", "Protected", "Internal"],
        answer: "Internal"
    },
    {
        question: "How is function overloading supported in TypeScript?",
        options: ["Multiple functions with the same name", "Multiple function signatures", "Functions with different names", "Overriding functions"],
        answer: "Multiple function signatures"
    },
    {
        question: "What is the use of the any type in TypeScript?",
        options: ["Defining specific types", "Defining functions", "Accepting arbitrary types", "Defining objects"],
        answer: "Accepting arbitrary types"
    }
];
async function runQuiz() {
    console.log(chalk.underline.red("WELCOME TO TYPESCRIPT QUIZ\n"));
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const quest = questions[i];
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "UserAnswer",
                message: `${quest.question}`,
                choices: quest.options.map((option, index) => ({
                    name: `${index + 1}. ${option}`,
                    value: option
                }))
            }
        ]);
        if (answer.UserAnswer === quest.answer) {
            console.log(chalk.blue("Correct\n"));
            score++;
        }
        else {
            console.log(chalk.red(`Wrong! Correct Answer: ${quest.answer}\n`));
        }
    }
    console.log(chalk.bgGray.bold(`Quiz ended. You scored ${score} out of ${questions.length}.\n`));
}
runQuiz();
