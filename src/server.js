require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const { connectDB } = require("./utils/database");
const { Post } = require("./models/PostModel");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Get all POSTS
app.get("/", async (request, response) => {
    const posts = await Post.find();
    response.json(posts);
});

// Create a NEW POST
app.post("/", async (request, response) => {
    const { title, content } = request.body;
    const post = await Post.create({
        title,
        content
    });
    
    response.status(201).json(post);
});

app.listen(PORT,
    async () => {
        await connectDB();
        console.log("server is running on port: ", PORT)
    }); 