// get all banner
const db = require("../config/db");

const getBanner = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM banner");
    if (!data) {
      res.status(500).send({
        success: false,
        message: "No list",
      });
    }
    res.status(200).send({
      success: true,
      message: "get list",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: flase,
      message: "got error",
    });
  }
};

const getBannerById = async (req, res) => {
  try {
    const bannerId = req.params.id;
    if (!bannerId) {
      res.status(500).send({
        success: false,
        message: "Invalid id",
      });
    }
    const data = await db.query(`SELECT * FROM banner WHERE sln=` + bannerId);
    if (!data) {
      res.status(404).send({
        success: false,
        message: "empty data",
      });
    }
    res.status(200).send({
      success: true,
      message: "get list",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: flase,
      message: "got error",
    });
  }
};
module.exports = { getBanner, getBannerById };
