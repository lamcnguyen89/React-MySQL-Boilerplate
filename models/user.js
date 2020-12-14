// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     firstname: {
//         type: String,
//         require: true
//     },
//     lastname: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     }
// });

// module.exports = User = mongoose.model("user", UserSchema);

// Here we create Sequelize data model:

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
    }

    });
  
    return User;
  };