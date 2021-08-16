import React from 'react';

import renderer from 'react-test-renderer';

import App from './App';
import Main from './src/pages/main';
import { expect } from '@jest/globals';

jest.mock('react-native-gesture-handler');
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();


test('generate', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

