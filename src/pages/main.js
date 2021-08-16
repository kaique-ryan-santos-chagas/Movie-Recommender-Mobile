import React from 'react';
import { StatusBar } from 'react-native';

import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Main = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar backgroundColor="#1C1C1C" barStyle="light-content" />

            <LogoImage source={require('../../assets/logo.png')} />

            <PopcornImage source={require('../../assets/icon.png')}  />

            <TextMenu>Welcome Nerd!</TextMenu>
            <TextMenu>searching for a movie?</TextMenu>

            <StartButton onPress={() => navigation.navigate('Movie View')}>
                <WelcomeTitle>Start</WelcomeTitle>
            </StartButton>

        </Container>
    );
}


const StartButton = styled.TouchableOpacity`
    background-color: red;
    color: white;
    border-radius: 25px;
    margin-top: 10px;
    width: 150px;
    height: 50px;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: absolute;
    margin-bottom: 40px
`;

const Container = styled.View`
    flex: 1;
    background-color: #1C1C1C;
    justify-content: center;
    align-items: center;

`;

const WelcomeTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: white
`;

const LogoImage = styled.Image`
    width: 300px;
    height: 100px;
    top: 0;
    position: absolute;
    margin-top: 30px;
`;

const PopcornImage = styled.Image`
    width: 100px;
    height: 100px;
    margin-bottom: 40px;
`;

const TextMenu = styled.Text`
    font-size: 15px;
    color: white;
    opacity: 0.8;
`;


export default Main;