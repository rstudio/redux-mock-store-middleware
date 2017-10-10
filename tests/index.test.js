import timer from 'timed-tape';
import tape from 'tape';
import {mockStore} from '../src/index';

const test = timer(tape) // eslint-disable-line


const reducers = {
  reducer1(state = {foo: 'bar'}, action) {
    if (action.type === 'action1') {
      return Object.assign({}, state, {bar: 'foo'});
    }
    return state;
  },
  reducer2(state = {goo: true}, action) {
    if (action.type === 'action2') {
      return Object.assign({}, state, {goo: false});
    }
    return state;
  },
};

test('mockStore getting initial state works', function(t) {
  t.plan(1);
  const store = mockStore(reducers);
  t.deepEqual(store.getState(), {
    reducer1: {foo: 'bar'},
    reducer2: {goo: true},
  });
});

test('mockStore dispatching actions work', function(t) {
  t.plan(2);
  const store = mockStore(reducers);
  store.dispatch({type: 'action1'});
  t.deepEqual(store.getState(), {
    reducer1: {foo: 'bar', bar: 'foo'},
    reducer2: {goo: true},
  });
  store.dispatch({type: 'action2'});
  t.deepEqual(store.getState(), {
    reducer1: {foo: 'bar', bar: 'foo'},
    reducer2: {goo: false},
  });
});

test('mockStore sideloading state works', function(t) {
  t.plan(1);
  const store = mockStore(
    reducers,
    [],
    {
      reducer1: {something: 'else'},
    }
  );
  t.deepEqual(store.getState(), {
    reducer1: {something: 'else'},
    reducer2: {goo: true},
  });
});
