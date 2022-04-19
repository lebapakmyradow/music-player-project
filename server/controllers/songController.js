const users = require("../data/db");

module.exports.loginHandler = function(req, res) {
    res.sendfile("./public/login.html");
}

module.exports.validate = function(req, res) {

    let foundUser = users.find((data) => req.body.username === data.username);;
    
    if (foundUser) {
        console.log(req.body);

            if (req.body.password == foundUser.password) {
                res.sendfile("./public/index.html");
                         
            } 
            else {
                res.send(`
                <body>
                <style>
                .center {
                    margin: auto;
                    width: 80%;
                    border: 3px solid green;
                    padding: 10px;
                }
                .warning{
                    color: red;
                }                
                </style>
                <div class="center">
                <form action="" method="POST">
                <h2>Your Logo here</h2>
                <label for="">Username: </label>
                <input type="text" name="Username" id="username" required>
                <label for="">Password: </label>
                <input type="password" name="password" id="password" required>
                <input type="submit" value="LOGIN">
                <br><br>
                <span class="warning"> Username or Password is wrong </span>
                </form>
            </div>
                `);
            }
    }
    else {
        res.send(`
        <body>
        <style>
        .center {
            margin: auto;
            width: 80%;
            border: 3px solid green;
            padding: 10px;
        }
        .warning{
            color: red;
        }                
        </style>
        <div class="center">
        <form action="" method="POST">
        <h2>Your Logo here</h2>
        <label for="">Username: </label>
        <input type="text" name="Username" id="username" required>
        <label for="">Password: </label>
        <input type="password" name="password" id="password" required>
        <input type="submit" value="LOGIN">
        <br><br>
        <span class="warning"> Username or Password is wrong </span>
        </form>
    </div>
        `);
    }

   
}