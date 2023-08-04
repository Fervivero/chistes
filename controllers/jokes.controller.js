const JokesModel = require("../models/jokes.model");


module.exports = {
    findAllJokes: (req, res) => {
        JokesModel.find()
            .then ((allJokes) => {
                res.json({data: allJokes}); 
            })
            .catch((error) => {
                res.json({error: error});
            })
    },

    findOneJokesById: (req, res) => {
        JokesModel.findOne({ _id: req.params.id })
            .then((OneJokesById) => {
                res.json(OneJokesById);
            })
            .catch((error) => {
                res.json({ message: "Something went wrong", error: error });
            })
    },

    createNewJokes: (req, res) => {
        JokesModel.create(req.body)
            .then((newJokes) => res.json({ jokes: newJokes }))
            .catch((err) => res.json({ message: "Something went wrong", error: err }));
    },

    updateExistingJokes: (req, res) => {
        JokesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) 
            .then((updatedJokes) => 
            {
                res.json({ jokes: updatedJokes });
            })
            .catch((error) => {
                res.json({ message: "Something went wrong", error: error.message });
            });
    },

    deleteAnExistingJokes: (req, res) => {
        JokesModel.deleteOne({ _id: req.params.id })
        .then((deletedJoke) => {
            res.json(deletedJoke);
        })
        .catch((error) => {
            res.status(500).json({ message: "Something went wrong", error: error.message });
        });
}
};