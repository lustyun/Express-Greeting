const express = require("express");
const app = express();
const port = 3000;

const response = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, stranger!</h1>");
});

app.get("/greeting/:name", (req, res) => {
    res.send(`<h1>Hello there, ${req.params.name}!</h1>`);
});

app.get("/tip/:total/:percent", (req, res) => {
    res.send(
        `<h1>Your ${req.params.percent}% tip on $${
            req.params.total
        } should be $${((req.params.total * req.params.percent) / 100).toFixed(
            2
        )}</h1>`
    );
});

app.get("/magic/:question", (req, res) => {
    res.send(`<h1>${req.params.question}</h1>
    <br>
    <h1>Response: ${response[Math.round(Math.random() * response.length)]}</h1>
    `);
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
