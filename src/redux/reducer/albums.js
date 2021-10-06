export const initialState = {
    loading: false,
    albums: [],
    playlist: [],
    errorMessage: null
};

export const albumReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_ALBUMS_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_ALBUMS_SUCCESS":
            return {
                ...state,
                loading: false,
                albums: action.payload
            };
        case "SEARCH_ALBUMS_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        case "SEARCH_PLAYLIST_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_PLAYLIST_SUCCESS":
            return {
                ...state,
                loading: false,
                playlist: action.payload
            };
        case "SEARCH_PLAYLIST_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};