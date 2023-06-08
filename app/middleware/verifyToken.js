const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // apabila user mengirimkan token maka kita akan memisahkan bearer dan token
  // apabila user tidak mengirimkan token maka authHeader akan bernilai undefined
  const token = authHeader && authHeader?.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) {
      return res.status(403).json({ message: "Token tidak valid" });
    }

    // req.userId = decode.userId;
    // req.name = decode.name;
    req.email = decode.email;

    next();
  });
};

module.exports = {
  verifyToken,
};
