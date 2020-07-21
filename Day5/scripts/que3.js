const success = true;
const data = new Promise((resolve, reject) => {
    if (success) {
        const results = {
            message: "This was a success!"
        };

        resolve(results);
    } else {
        const results = {
            message: "This failed!"
        };

        reject(results);
    }
});

data.then(success => {
    console.log(success.message);
}).catch(error => {
    console.log(error.message);
})


async function apiSuccess() {
    const results = {
        message: "This was a success!"
    };

    return results;
}


function apiSuccess() {
    const results = {
        message: "This was a success!"
    };

    return Promise.resolve(results);
}

	
async function apiFailure() {
    const results = {
        message: "This failed!"
    };

    throw new Error(results);
}

function apiFailure() {
    const results = {
        message: "This failed!"
    };

    return Promise.reject(results);
}

async function getAPIData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);
    } catch(error) {
        // catches errors in all async functions
        console.log(error);
    }
}

let url = "https://jsonplaceholder.typicode.com/todos/1";
getAPIData(url);

//https://jsonplaceholder.typicode.com/todos

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId : 254,
    title : "Some Title",
    body : 'lorem ipsum',
}


fetch('https://jsonplaceholder.typicode.com/todos',{
    method : 'POST',
    body : JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))