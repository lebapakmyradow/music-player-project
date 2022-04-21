const Login = require('./login');

let songs = [
    { id: '1', title: 'Song1, Piano', releaseDate: '2011-11-11' },
    { id: '2', title: 'Song2, Classical', releaseDate: '2004-10-01' },
    { id: '3', title: 'Song3, Hip-hop', releaseDate: '1980-01-02' },
    { id: '4', title: 'Song4, Violin', releaseDate: '1990-09-10' },
    { id: '5', title: 'Song5, Romance', releaseDate: '2001-09-11' },
    { id: '6', title: 'Song6, Musical', releaseDate: '2020-10-07' },
    { id: '7', title: 'Song7, Rap', releaseDate: '2022-01-05' },
    { id: '8', title: 'Song8, Pop Music', releaseDate: '2017-05-24' },
    { id: '9', title: 'Song9, Jazz', releaseDate: '2018-09-29' },
    { id: '10', title: 'Song10, Country Music', releaseDate: '1999-03-19' }
];

module.exports = class Song {
    constructor(id, title, releaseDate) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
    }

    //post user and song, checks if user logged in, 
    //if so finds the song and adds it to users playlist in memory
    static addSong(user, song) {
        if (!Login.check(user))
            return { result: false, message: "Login first" };
        let usr = Login.allUsers().find(u => u.user === user);
        let sng = songs.find(s => s.id == song);
        usr.playlist.push(sng);
        return { result: true, message: "Song added to your playlist" };
    }

    //post user and song, checks if logged in, 
    //if so users playlist has song, removes from there via filtering
    static removeSong(user, song) {
        if (!Login.check(user))
            return { result: false, message: "Login first" };
        let usr = Login.allUsers().find(u => u.user === user);

        if (usr.playlist.findIndex(p => p.id == song) > -1) {
            usr.playlist = usr.playlist.filter(p => p.id != song);
        }
        return { result: true, message: "Song removed from playlist" };
    }

    //post user and keyword, checks if logged in, 
    //if so, search for keword in songs array via filtering
    static search(user, keyword) {
        if (!Login.check(user))
            return { result: false, message: "Login first" };
        return { result: true, message: "Search completed.", data: songs.filter(s => s.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) };
    }

    static getAll() {
        return songs;
    }

    save() {
        songs.push(this);
        return this;
    }

    update() {
        const index = songs.findIndex(p => p.id === this.id);
        if (index > -1) {
            songs.splice(index, 1, this);
            return this;
        }
        else throw new Error('Not Found');
    }
    
    static fetchAll(user) {
        let interest = [];
        let playlist = [];
        let usr = Login.allUsers().find(u => u.user === user);
        if (usr != null)
            playlist = usr.playlist;
        let count = 0;
        for (let i = 0; i < songs.length; i++) {
            if (playlist.find(s => s.id == songs[i].id) == null)
                interest.push(songs[i]);
            count++;
        }
        return { interest: interest, playlist: playlist };
    }

    static findById(songId) {
        const index = songs.findIndex(p => p.id === songId);
        if (index > -1)
            return songs[index];
        else throw new Error('Not Found');
    }

    static deleteById(songId) {
        const index = songs.findIndex(p => p.id === songId);
        if (index > -1)
            songs = songs.filter(p => p.id !== songId);
        else throw new Error('Not Found');
    }
}