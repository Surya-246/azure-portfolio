const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

// Allow Express to understand JSON data
app.use(express.json());
app.use(cors());

// ===============================
// TEST ROUTE
// ===============================

app.get("/", (req, res) => {
    res.json({
        message: "Surya's Portfolio Backend is running!"
    });
});


// ===============================
// PROJECTS API
// ===============================

app.get("/api/projects", (req, res) => {

    const projects = [
        {
            id: 1,
            name: "AWS Static Website Hosting",
            technologies: ["AWS", "S3", "HTML", "CSS"]
        },
        {
            id: 2,
            name: "Serverless API with AWS Lambda",
            technologies: ["AWS Lambda", "API", "Serverless"]
        },
        {
            id: 3,
            name: "AWS Infrastructure as Code",
            technologies: ["AWS CDK", "TypeScript", "CloudFormation"]
        },
        {
            id: 4,
            name: "Azure Portfolio Launchpad",
            technologies: ["Azure", "Node.js", "App Service"]
        }
    ];

    res.json(projects);
});


// ===============================
// CONTACT API
// ===============================

app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("New contact message:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        success: true,
        message: `Thank you ${name}! Your message has been received.`
    });
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log(`Backend server running at http://localhost:${PORT}`);

});