const userService = require("../services/userService");
const slugify = require("slugify");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require("../models");
// const cookie = require("cookie");


// const users = require("../models/users");

const getAllUsers = async (req, res) => {
  userService
    .getAllUsers()
    .then((users) => {
      res.status(200).json({
        status: "Success",
        message: "Success get all data seminar",
        data: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const addUser = async (req, res) => {
  const { nama, email, password, confPassword } = req.body;
  const slugNama = slugify(nama);

  if (password !== confPassword) {
    return res.status(400).json({
      status: "Error",
      message: "Password and confirm password not match",
    });
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  userService
    .addUser({
      nama: nama,
      email: email,
      password: hashedPassword,
      slug: slugNama,
    })
    .then((users) => {
      res.status(200).json({
        status: "Success",
        message: "Success add data seminar",
        data: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const userLogin = async (req, res) => {
  try {
    const user = await users.findAll({
      where: {
        email: req.body.email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match) {
      return res.status(400).json({ message: "password salah" });
    }

    const userId = user[0].id;
    const nama = user[0].nama;
    const slug = user[0].slug;
    const email = user[0].email;

    console.log("user", user);

    const accessToken = jwt.sign(
      { userId, nama, slug, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { userId, nama, slug, email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    console.log("refresh token", refreshToken);
    console.log("env", process.env.REFRESH_TOKEN_SECRET);
    console.log("env", process.env.ACCESS_TOKEN_SECRET);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    await users.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    console.log("cookie setttttttttttttttttttttt");

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: "email tidak ditemukan" });
  }
};

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(204).json({ message: "No Content" });
  }

  const user = await users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user[0]) {
    return res.status(204).json({ message: "No Content" });
  }

  const userId = user[0].id;
  await users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");

  return res.sendStatus(200);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  userService.getUserById(id).then((users) => {
    res.status(200).json({
      status: "Success",
      message: "Success get data seminar by id",
      data: users,
    });
  });
};


module.exports = {
  getAllUsers,
  addUser,
  userLogin,
  Logout,
  getUserById,
};
