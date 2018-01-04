const http = new easyHTTP;

// GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
})