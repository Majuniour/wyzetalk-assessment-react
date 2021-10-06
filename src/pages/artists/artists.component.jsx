import React, { useState, useReducer, useEffect } from 'react';

import { initialState, reducer } from '../../redux/reducer/artists';


import SearchBar from '../../components/search-bar/search-bar-component';
import CollectionPreview from '../../components/collection-preview/collection-preview';


import './artists.styles.scss'

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        fetch(`/search/artist?q=`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SEARCH_MOVIES_SUCCESS",
                    payload: data.data
                });
            });
    }, []);

    const search = async (searchArtist) => {
        dispatch({
            type: "SEARCH_ARTISTS_REQUEST"
        });
        //console.log("un", searchArtist)
        fetch(`/search/artist?q=${searchArtist}`)
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    dispatch({
                        type: "SEARCH_ARTISTS_SUCCESS",
                        payload: data.data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_ARTISTS_FAILURE",
                        error: data.Error
                    });
                }
            });
    };


    console.log("state", state)
    const { artists, errorMessage, loading } = state;


    return (


        loading === true && errorMessage ? <div><text>Loading...</text></div>
            :

            <div className="shop-page">
                <>
                    {/* <h1>Artist List</h1> */}

                    <SearchBar search={search}
                    />


                    {
                        //console.log("updated state", artists)
                        <CollectionPreview data={artists} />
                    }
                </>

            </div>)

}

export default Home;