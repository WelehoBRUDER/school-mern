exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

const Game = require('../models/Game');

exports.getIndex = async (req, res) => {
    const game = await Game.find((data) => data);

    try {
        console.log(game);
        res.status(200).render('index', { game: game });
    } catch (error) {
        console.log(error);
    }
};

exports.getGame = async (req, res) => {
    const gameId = req.params.gameId;

    if (gameId.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.

        const game = await Game.findById(gameId, (game) => game);
        try {
            console.log(game.name + " rendered!");
            res.status(200).render('game', { game: game });
        } catch (error) {
            console.log(error);
        }
    }
};

exports.postDelete = async (req, res) => {
    const gameId = req.body.gameId;

    const game = await Game.findByIdAndRemove(gameId, (data) => data);

    try {
        console.log("Item deleted!");
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
    const { name, image, description, difficulty, length } = req.body;

    Game.findById(gameId)
        .then((game) => {
            game.name = name;
            game.image = image;
            game.description = description;
            game.difficulty = difficulty;
            game.length = length;

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
    const { name, image, description, difficulty, length } = req.body;

    const game = new Game({ name: name, image: image, description: description, difficulty: difficulty, length: length });
    game.save();
    console.log('Game Added to the database');
    res.status(201).redirect('/');
};