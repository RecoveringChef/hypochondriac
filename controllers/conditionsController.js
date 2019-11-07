const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        console.log("backend");
        db.Conditions
            .find()
            .then(data => {
                console.log("backend data");

                res.json(data)
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Conditions
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Conditions
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Conditions
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Conditions
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};