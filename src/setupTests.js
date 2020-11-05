import '@testing-library/jest-dom/extend-expect';

require('./requestAnimationFrame');

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe    = jest.fn();
  this.disconnect = jest.fn();
  // Optionally add a trigger() method to manually trigger a change
  this.trigger = mockedMutationsList => {
    callback(mockedMutationsList, this);
  };
});

global.MutationObserver    = mutationObserverMock;
