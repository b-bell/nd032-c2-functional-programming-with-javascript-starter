const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({id: '12345'});
const fetchUser = mockAPI({firstname: 'Bob'});
const fetchUserFavorites = mockAPI(['Lions', 'Tigers', 'Bears']);

// Callback hell
const runCallbacks = () => {
    fetchSession('session-id', (session) => {
        fetchUser(session, (user) => {
            fetchUserFavorites(user, (favorites) => {
                console.log(favorites);
            });
        });
    });
};

// Promise chain
const runPromises = () => {
    return fetchSession('session-id')
        .then(session => fetchUser(session))
        .then(user => fetchUserFavorites(user))
        .then(favorites => console.log(favorites))
        .catch(error => consolee.log('Oops!'));
};
