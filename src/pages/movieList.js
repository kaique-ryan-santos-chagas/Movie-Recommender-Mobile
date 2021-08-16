import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import api from './services/api';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MovieList = () => {


    const [popMoviesData, setPopMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieImages, setMovieImages] = useState([]);

    useEffect(() => {
        const getPopMoviesData = async () => {

            const popMovies = await api.get('/movies/popular', {
                headers: {
                    'Content-type': 'application/json',
                    'trakt-api-key': '8666a33e99eb0a012e381b36770ded8ad21da26eb3f602d7bb1702656f342173',
                    'trakt-api-version': '2'
                }
            });
        
            setPopMoviesData(popMovies.data);
        }

        getPopMoviesData();
      
    }, []);


    useEffect(() => {
        
       if(popMoviesData[0] != undefined){
           popMoviesData.map(async (movie) => {
                const popMovieImages = await axios.get(`http://www.omdbapi.com/?apikey=8eb84e3e&t=${movie.title}`);
                movieImages.push(popMovieImages.data.Poster);
                setMovieImages([ ...movieImages ]);
           });
       }

    }, [popMoviesData]);


    useEffect(() => {
        
        if(movieImages != undefined){
            setLoading(false);
         }

    }, [movieImages]);

   
    if(loading == true){
        return (
            <Container>
                <ActivityIndicator color="red" size={70} />
            </Container>
        );
    }


    return (

        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false} contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,

        }}>

            <Logo source={require('../../assets/logo.png')} />

            <MaterialCommunityIcons name="popcorn" size={25} color="white" style={styles.icon} />
            <MoviePopTitle>Popular movies</MoviePopTitle>
            
            <ScrollMovies horizontal={true} showsHorizontalScrollIndicator={false}>
               {movieImages.map((image) => {

                   var position = movieImages.indexOf(image);

                   return (
                        <MovieImageView key={position}>

                           <MovieImage source={{ uri: image }} />
                           
                        </MovieImageView>
                   )

               })}
            </ScrollMovies>      

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#1C1C1C',
    },
    icon: {
        left: 0,
        top: 0,
        position: 'absolute',
        marginTop: 252,
        marginLeft: 25
    }
});


const MovieImage = styled.Image`
    width: 150px;
    height: 200px;
`;

const MovieImageView = styled.TouchableOpacity`
    width: 200px;
    height: 250px;
    justify-content: center;
    align-items: center;
    padding: 0;
    
`;


const ScrollMovies = styled.ScrollView`
    bottom: 0;
    position: absolute;
    margin-bottom: 80px;
`;


const MoviePopTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
    left: 0;
    top: 0;
    position: absolute;
    margin-left: 60px;
    margin-top: 250px;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #1C1C1C;
`;


const Logo = styled.Image`
    width: 300px;
    height: 100px;
    top: 0;
    position: absolute;
    margin-top: 20px;
`; 


export default MovieList;