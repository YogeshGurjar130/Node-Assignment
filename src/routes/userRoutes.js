const express = require("express");
const router = express.Router();
const { createUser, updateUser, deleteUserById, getUserById, getAllUsers } = require('../controller/userController');

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUserById);
router.get("/:id", getUserById);

module.exports = router;
