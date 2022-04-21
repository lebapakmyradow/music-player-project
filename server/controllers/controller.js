const Song = require('../models/song');
const Login = require('../models/login');

exports.login = (req, res, next) => {
    const lgn = req.body;
    const tryLogin = new Login(lgn.user, lgn.pass).login();
    res.status(201).json(tryLogin);
}

exports.logout = (req, res, next) => {
    res.status(201).json(Login.logout(req.body.user));
}

exports.checkLogin = (req, res, next) => {
    const lgn = req.body;
    return new Login(lgn.user, lgn.token).check(lgn.user);
}

exports.getSongs = (req, res, next) => {

    if (Login.check(req.body.user))
        res.status(200).json({ result: true, message: "Success", data: Song.fetchAll(req.body.user) });
    else res.status(200).json({ result: false, message: "You must login first." });
}

exports.getSongById = (req, res, next) => {
    res.status(200).json(Song.findById(req.params.songId));
}

exports.save = (req, res, next) => {
    const song = req.body;
    const savedSong = new Song(null, song.title, song.releaseDate).save();
    res.status(201).json(savedSong);
}

exports.update = (req, res, next) => {
    const song = req.body;
    const updatedSong = new Song(req.params.id, song.title, song.releaseDate).update();
    res.status(200).json(updatedSong);
}

exports.deleteById = (req, res, next) => {
    Song.deleteById(req.params.songId);
    res.status(200).end();
}

exports.addSong = (req, res, next) => {
    res.status(201).json(Song.addSong(req.body.user, req.body.songId));
}

exports.removeSong = (req, res, next) => {
    res.status(201).json(Song.removeSong(req.body.user, req.body.songId));
}

exports.search = (req, res, next) => {
    res.status(201).json(Song.search(req.body.user, req.body.word));
}