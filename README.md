# redux-mock-store-middleware

Middleware that allows you to use a fully-working store in tests!

## Installation

TODO

## Usage

```js

describe('state-based tests', function() {
  // First create some reducers
  function reducer1(state = {foo: 'bar'}, action) {
    switch(action.type) {
      case 'action1':
        return {
          ...state,
          bar: 'foo',
        };
      default:
        return state;
    }
  }
  function reducer2(state = {goo: false}, action) {
    // ...
    return state;
  }
  const reducers = {reducer1, reducer2};

  let store;
  
  beforeEach(function() {
    // Then create the mock store
    store = mockStore(reducers);  
  })
  
  it('should work when you use the mockStore like a normal store', function() {
    store.dispatch({type: 'action1'});
    // But you can get the state
    expect(store.getState()).to.deep.equals({
      reducer1: {
        foo: 'bar', //initial state
        bar: 'foo', //result of action1
      },
      reducer2: {
        goo: false, //initial state
      },
    });
    // As well as all the dispatched actions
    expect(store.getActions()).to.contain(
      {type: 'action1'}
    );
  });
  
  describe('and side loading state', function() {
    beforeEach(function() {
      // You can specify different initial state
      store = mockStore(reducers, [], {
        reducer1: {
          something: 'else',
        },
      })
    });
    
    it('should work', function() {
      expect(store.getState()).to.deep.equals({
        reducer1: {something: 'else'},
        reducer2: {goo: false},
      });
    });
  });
});
```
