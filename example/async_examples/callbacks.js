const mockAPI = (returnValue) => (arg, success, failure) => {
    // setTimeout(() => success(returnValue), 2000);
    setTimeout(() => failure('Request Failed'), 2000);
}

const fetchSession = mockAPI({ id: '123765' });
const fetchUser = mockAPI({ firstName: 'Bob' });
const fetchUserFavorites = mockAPI(['lions', 'tigers', 'bears']);
const handleError = (error) => {
    // You can put more custom logic here
    console.log(error);
}

const runCallbacks = () => {
    fetchSession('session-id', (session) => {
        fetchUser(session, (user) => {
            fetchUserFavorites(user, (favorites) => {
                console.log(favorites);
            }, handleError);
        }, handleError);
    }, handleError);
}

runCallbacks();

const runCallbacksFlat = () => {
    const handleFavorites = (favorites) => {
        console.log(favorites);
    }

    const handleUser = (user) => {
        fetchUserFavorites(user, handleFavorites, handleError);
    }

    const handleSession = (session) => {
        fetchUser(session, handleUser, handleError);
    }

    fetchSession('session-id', handleSession, handleError);
}

runCallbacksFlat();
