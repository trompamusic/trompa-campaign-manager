import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import 'url-search-params-polyfill';
import { provided } from '../src/testUtils';
import './style.css';

addDecorator(story => provided(story()));

const requireComponents = require.context('../src/components', true, /\.stories\.jsx?$/);
const requireContainers = require.context('../src/containers', true, /\.stories\.jsx?$/);

const loadStories = () => {
  requireComponents.keys().forEach((filename) => requireComponents(filename));
  requireContainers.keys().forEach((filename) => requireContainers(filename));
};

configure(loadStories, module);
