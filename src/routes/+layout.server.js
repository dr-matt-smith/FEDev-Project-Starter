
export const load = async (event) => {
    if (event.locals.user) {
        return {
            isLoggedIn: true,
            user: event.locals.user
        };
    }

    return {
        isLoggedIn: false,
        user: undefined
    };
};
