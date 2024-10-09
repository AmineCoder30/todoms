import express from "express";
import { List } from "../models/listModel.js";
import mongoose from "mongoose";
const router = express.Router();

// Route to add new todo
router.post("/create/", async (request, response) => {
  try {
    const { userid, status, content, priority, date } = request.body;

    if (!userid || !content || !priority || !date) {
      return response.status(400).send({
        message: "one field or more are missing",
      });
    }

    const newTask = {
      user_id: userid,
      content,
      status,
      priority,
      date,
    };

    const user = await List.create(newTask);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "Internal Server Error" });
  }
});

// Route for Get All todos from database
router.get("/get/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const user = await List.findOne({ user_id: id });

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    const todoList = await List.find({ user_id: id });

    return response.status(200).json({ todoList });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "Internal Server Error" });
  }
});

// Route for update One item from database by id
router.put("/update/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { content, priority, date, status } = request.body;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return response
        .status(400)
        .send({ message: "Invalid or missing id parameter" });
    }

    const todo = await List.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          content,
          priority,
          date,
          status,
        },
      },
      { new: true }
    );

    if (!todo) {
      return response.status(404).send({ message: "Todo not found" });
    }

    return response.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "Internal Server Error" });
  }
});

// Route for Delete a one item
router.delete("/delete/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await List.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).send({ message: "Todo not found" });
    }

    return response.status(200).send({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;
