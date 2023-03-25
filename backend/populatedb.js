/** 
 * Harcoding sample entries into DB for development purposes 
 */

const userArgs = process.argv.slice(2);
const mongoDB = userArgs[0];
const blogs = [];


const BlogModel = require("./models/blog.model");
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createBlogs();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function blogCreate(heading, name, text) {
   const blog = new BlogModel({
       title: heading,
       author: name, 
       content: text
   });
  
   await blog.save();
   blogs.push(blog);
   console.log(`Added blog made by ${name}`);
}

// us hard coding the creation of blogs
async function createBlogs() {
    console.log("Adding blogs");
    await Promise.all([
      blogCreate("Blog_101", "Kevin A.", "Loream ipsum..."),
      blogCreate("Blog_102", "Eduardo G.", "Loream ipsum, sappho, desires..."),
    ]);
  }