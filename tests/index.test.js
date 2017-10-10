// Copyright 2017 RStudio, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
// Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
