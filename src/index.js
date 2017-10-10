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

import {combineReducers, createStore, applyMiddleware} from 'redux';

const dummyReducer = (state = {}) => state;

/**
 * Middleware that allows you to get the current state, dispatch actions, and track
 * all dispatched actions.
 * @returns {MockStore}
 */
export function mockMiddlewareStore() {
  let store = {
    getState: () => undefined,
    dispatch: () => undefined,
  };
  let actions = [];
  return {
    resetActions() {
      actions = [];
    },
    getState() {
      return store.getState();
    },
    dispatch(action) {
      return store.dispatch(action);
    },
    getActions() {
      return actions;
    },
    middleware(_store) {
      store = _store;
      return next => action => {
        actions.push(action);
        return next(action);
      };
    },
  };
}

/**
 * Allows you to use a fully-working redux store under the hood! Make sure to
 * re-create the mockStore at the start of every test (as you should already be
 * doing); otherwise, state and actions will accumulate across tests.
 * @param {Map<string,Reducer>} reducers - keys are domains, values are reducer
 * functions. Example with two domains, `reducer1` and `reducer2`:
 * ```js
 * {
 *    reducer1(state = {foo: 'bar'}, action) {
 *       switch(action.type) {
 *          case 'action1':
 *             return {...state, bar: 'foo'}
 *          default:
 *             return state
 *       }
 *    },
 *    reducer2(state = {goo: true}, action) {
 *        // ....
 *    }
 * }
 * ```
 * @param {Array<Middleware>} middleware - middleware to use (do NOT add
 * mockMiddleStore---this is automagically added).
 * @param {Map<string,State>} initialState (optional) - optional initial state. Try
 * to avoid using this. Instead you should mutate the internal redux state by
 * dispatching actions. This keeps the internal redux state from
 * leaking unnecessarily. Example that overrides `reducer` only:
 * ```js
 * {
 *    reducer1: {foo: 'baz'}
 * }
 * ```
 * @returns {MockStore}
 */
export function mockStore(
  reducers = {__dummy: dummyReducer},
  middleware = [],
  initialState = {},
) {
  // Override the reducer initial state. (Recall that reducer functions have the signature
  // `function reducer(state = initialState, action) { ... }`. That is, the initial
  // state is passed as a default parameter. So to override a reducer's initial state
  // we have to create a function that uses a different default paramter for state.
  const reducersWithNewInitialState = Object.keys(reducers).reduce(
    (newReducers, domain) => {
      const reducer = reducers[domain];
      const newInitialState = initialState[domain];
      if (newInitialState) {
        // If we have new initial state, then use this as the initial state
        newReducers[domain] =
          (state = newInitialState, action) => reducer(state, action);
      } else {
        // Otherwise, use the original reducer
        newReducers[domain] = reducer;
      }
      return newReducers;
    },
    {},
  );
  const app = combineReducers(reducersWithNewInitialState);
  const store = mockMiddlewareStore();
  const mockMiddleware = store.middleware;
  delete store.middleware;
  createStore(
    app,
    applyMiddleware(...[mockMiddleware].concat(middleware))
  );
  return store;
}
