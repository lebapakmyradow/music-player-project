# music-player-project
 music player website

 Client: used xml httprequests to communicate with server

 Server: Express.js with Router, model and controller

 HOW TO RUN:
1. Start server 'nodemon app.js' from the server file directory
    --- requires express.js, node.js to be installed
    --- update / install node_modules
2. Once server started, go to client/home.html and start client side port


Project Description:

In memory populated users with attr username, password, token, playlist login to the system. 
Once logged in, user can add songs to their playlist from the suggested playlist or from search results.
They can remove songs and play songs in their playlist. Also, there is repeat all, shuffle, repeat song options with playlist that has play, pause, next, prev buttons. Any change on playlist will be saved and token will be set to null once logged out.

Here’s the project requirements:
1. The client and server side are separated project. We’ll use in-memory database for this project.
2. You need to make the client project design(layout) like the screenshots. For all icons in the
design, you can use font awesome or download icons online. And you’re welcome to change the
colors.
3. There’s a login page, user can put username/password to login. All other requested need to be
authenticated. You can prepopulate several users in DB. If username and password doesn’t
match, display “Error” message to user.
a. Here is the idea on how you implement the login feature:
i. When use clicks login button with username and password, if you can find the
user with correct password, generated a string with current datetime with
username, then send back to clientside
ii. In the client side, get the generated string, store it in session storage.
iii. For all the remaining requests, always pass the generated string located in
session storage to server side. And server side verify if it has a string with the
request. If has, allow access, if not, redirect to login page.
4. Once user logs in, they can see a table of song list and their playlist if they created before. The
song list is pre-populated song list in the in-memory database.
5. User can add new songs to their playlist, can also remove songs from their playlist.
6. Different users should see different playlist. Song playlist belongs to users
7. There’s a logout button. Once user logs out, see the login page again.
a. Here is the idea of implementing logout
i. Remove the string from session storage
8. Search Songs by song title: type keyword in the search bar, it’ll list the song list which song title
contains the word you input, case insensitive.
9. (3 Extra Points) When we click the play icon, it’ll have the song playbar at the end of the screen.
In the playbar, it’ll display “song title”, play progress bar, current play time, song total time,
repeat module: repeat all songs, repeat only one song, play shuffle songs.
You can click “prev” or “next” button to change songs. You can click “play or pause” button to
play or pause the song. You can click the icon to change play mode.