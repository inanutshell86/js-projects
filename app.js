document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn3').addEventListener('click', getExternal);

// Get local text file
function getText() {
    fetch('test.txt')
        .then(function (res) {
           return res.text();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        })
}

// Get local json data
function getJSON() {
    fetch('posts.json')
        .then(function (res) {
           return res.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}

// Get data from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (res) {
           return res.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}