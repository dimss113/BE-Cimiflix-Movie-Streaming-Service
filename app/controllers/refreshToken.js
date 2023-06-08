const { users } = require("../models");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    console.log(req.cookies);
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "UnAuthorized" });
    }

    const user = await users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user[0]) {
      return res.status(403).json({ message: "Forbidden" });
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "Forbidden" });
        }

        const userId = user[0].id;
        const nama = user[0].nama;
        const slug = user[0].slug;
        const email = user[0].email;

        const accessToken = jwt.sign(
          { userId, nama, slug, email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1m" }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  refreshToken,
};
