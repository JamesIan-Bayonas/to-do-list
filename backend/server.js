import express from "express"; // imports the framework:: (express.js) and take note that express is a function
import notesRoute from "./route/notesRoute.js"; // import the notesRouter from the notesRoute file

const app = express(); // created an instance of express\

app.use("/api/notes", notesRoute); // this is how we use the notesRouter in our app

app.listen(5001, () => {
  console.log("Server started on PORT:: 5001");
});
