var express = require("express");
var router = express.Router();
const Dish = require("../models/dish");

router.get("/dishes", (req, res, next) => {
  Dish.find((err, dishesList) => {
    if (err) {
      next(err);
      return;
    }
    res.json(dishesList);
  });
});

router.get("/dishes/:id", (req, res, next) => {
  Dish.findById(req.params.id, (err, dish) => {
    if (err) {
      next(err);
      return;
    }
    res.json(dish);
  });
});

router.patch("/dishes/:id", (req, res, next) => {
  Dish.findByIdAndUpdate(req.params.id, { description: req.body.description }, { new: true }, (err, dish) => {
    if (err) {
      next(err);
      return;
    }
    res.json(dish);
  });
});

module.exports = router;
