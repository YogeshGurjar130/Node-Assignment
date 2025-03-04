const database = require("../config/db");

exports.createUser = (req, res) => {
    try {
        const { name, email, password } = req.body;
        database.query("INSERT INTO user (name, email, password) VALUES (?,?,?)", [name, email, password], (err, result) => {
            console.log("RESULT ", result);
            if (err != null) {
                console.log("ERROR ", err);
                res.send(err);
            } else {
                res.status(200).send("user created");
            }
        });
    } catch (error) {
        console.log("Error on create user ", error);
        res.send("Failed to create user");
    }
};

exports.updateUser = (req, res) => {
    try {
        const { userId, name, email, password } = req.body;
        database.query("UPDATE user SET name=?, email=?, password=? WHERE userId=? ", [name, email, password, userId], (err, result) => {
            console.log("RESULT ", result);
            if (err != null) {
                console.log("ERROR ", err);
                res.send(err);
            } else {
                res.status(200).send("user updated");
            }
        });
    } catch (error) {
        console.log("Error on update user ", error);
        res.send("Failed to update user");
    }
}

exports.getUserById = (req, res) => {
    try {
        const { id } = req.params;
        database.query("SELECT * FROM user WHERE userId=? ", [id], (err, result) => {
            console.log("RESULT ", result);
            if (err != null) {
                console.log("ERROR ", err);
                res.json(err);
            } else {
                if (result == []) {
                    res.send("Failed to find user");
                }
                else {
                    res.status(200).send(result[0]);
                }
            }
        });
    } catch (error) {
        console.log("Error on get user by ID ", error);
        res.send("Failed to find user");
    }
}

exports.deleteUserById = (req, res) => {
    try {
        const { id } = req.params;
        database.query("DELETE FROM user WHERE userId=? ", [id], (err, result) => {
            console.log("RESULT ", result);
            if (err != null) {
                console.log("ERROR ", err);
                res.send(err);
            } else {
                if (result.affectedRows != 0) {
                    res.send("user deleted");
                } else {
                    res.send("Failed to delete user");
                }
            }
        });
    } catch (error) {
        console.log("Error on delete user ", error);
        res.send("Failed to delete user");
    }
}

exports.getAllUsers = (req, res) => {
    try {
        database.query("SELECT * FROM user", (err, result) => {
            console.log("RESULT ", result);
            if (err != null) {
                console.log("ERROR ", err);
                res.send(err);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (error) {
        console.log("Error on get all user ", error);
        res.send("Failed to find users");
    }
}