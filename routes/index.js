const router = require("express").Router();
// router.get("/", (req, res) => {
//   res.send("Hello World! Welcome to the home page!");
// });
router.use("/contacts", require("./contacts"));
module.exports = router;
