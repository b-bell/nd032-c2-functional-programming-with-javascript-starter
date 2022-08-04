const genericAPIRequest = () => {
    return new Promise((resolve, reject) => {
        resolve({body: 'My test data'});
    });
}

genericAPIRequest().then(data => {
    console.log(data);
}).catch(error => console.log(error));