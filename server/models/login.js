const Song = require('./song');

//each user has username, password, and token which is null by default, token generated during login
let users = [
    {
        user: 'a', pass: 'a', token: null,
        playlist: [
            { id: '1', title: 'Song1, Piano', releaseDate: '2012-12-01' },
            { id: '2', title: 'Song2, Classical', releaseDate: '2005-11-19' }
        ]
    },
    {
        user: 'b', pass: 'b', token: null,
        playlist: [
            { id: '5', title: 'Song5, Romance', releaseDate: '2000-09-23' },
            { id: '6', title: 'Song6, Musical', releaseDate: '2010-08-30' },
            { id: '9', title: 'Song9, Jazz', releaseDate: '2000-02-12' },
            { id: '10', title: 'Song10, Country Music', releaseDate: '2010-06-01' },
        ]
    },
    
    {
        user: 'c', pass: 'c', token: null,
        playlist: []
    }

];

module.exports = class Login {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }

    //using post user, we find user and compare username and password, 
    //if matches generate a token of current Date+Time
    login() {
        let usr = users.find(u => u.user === this.user);
        if (usr != null && usr.pass === this.pass) {

            usr.token = new Date(new Date().getTime() + (12 * 60 * 60 * 1000));
            return { result: true, message: "Successful Login", data: usr };

        }
        return { result: false, message: "Username or Password is wrong. Try again!" };
    }

    //given user, checks if user matches username and token not null
    static check(user) {
        var usr = users.find(u => u.user === user);
        return usr != null && usr.token != null && usr.token > new Date();
    }

    static allUsers() {
        return users;
    }

    //find user, update token as null
    static logout(user) {
        var usr = users.find(u => u.user === user);
        if (usr != null)
            usr.token = null;
        return { result: true, message: "Logged out!" };
    }
}