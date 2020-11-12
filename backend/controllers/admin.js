exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

const Game = require('../models/Game');

exports.getIndex = async (req, res) => {
    const game = await Game.find((data) => data);

    try {
        res.json(game);
    } catch (error) {
        console.log(error);
    }
};

exports.getGame = async (req, res) => {
    const gameId = req.params.gameId;
        const game = await Game.findById(gameId, (game) => game);
        try {
            game.save();
            res.status(201).json(game);
        } catch (error) {
            console.log(error);
        }
};

exports.postDelete = async (req, res) => {
    const gameId = req.body.gameId;

    const game = await Game.findByIdAndRemove(gameId, (data) => data);

    try {
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

exports.getEditGame = async (req, res) => {
    const gameId = req.params.gameId;
    console.log(gameId);

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const game = await Game.findById(gameId);

    try {
        if (!gameId) {
            return res.redirect('/');
        }
        console.log(game);
        res.status(200).render('edit-game', { game: game, editing: editMode });
    } catch (error) {
        console.log(error);
    }
};

exports.postEditGame = (req, res) => {
    const gameId = req.body.gameId;
    const { name, image, description, difficulty, length, final_thoughts, rating } = req.body;

    Game.findById(gameId)
        .then((game) => {
            game.name = name;
            game.image = image;
            game.description = description;
            game.difficulty = difficulty;
            game.length = length;
            game.final_thoughts = final_thoughts;
            game.rating = rating;

            return game.save();
        })
        .then(() => {
            console.log('Item Updated');
            res.status(201).redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getAddGame = (req, res) => {
    res.status(200).render('edit-game');
};

exports.postGame = (req, res) => {
    const { name, image, description, difficulty, length, final_thoughts, rating } = req.body;

    const game = new Game({ name: name, image: image, description: description, difficulty: difficulty, length: length, final_thoughts: final_thoughts, rating: rating });
    game.save();
    console.log('Game Added to the database');
    res.status(201).redirect('http://localhost:3000/');
};