import React from 'react';

import renderer from 'react-test-renderer';

import MovieList from './src/pages/movieList';

jest.mock('react-native-gesture-handler');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();

test('generate', () => {
    const tree = renderer.create(<MovieList />).toJSON();
    expect(tree).toMatchSnapshot();
});

