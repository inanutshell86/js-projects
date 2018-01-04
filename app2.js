const http = new EasyHTTP;

// GET users
/* http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

// Create data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmai.com'
};

// Create user
/* http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

// Update user
/* http.put('https://jsonplaceholder.typicode.com/users/5', data)
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

// Delete post
http.delete('https://jsonplaceholder.typicode.com/users/5', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));