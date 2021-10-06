export const initialState = {
    loading: false,
    artists: [],
    errorMessage: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_ARTISTS_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_ARTISTS_SUCCESS":
            return {
                ...state,
                loading: false,
                artists: action.payload
            };
        case "SEARCH_ARTISTS_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};

