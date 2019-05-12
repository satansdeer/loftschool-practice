import {createStore, applyMiddleware} from 'redux';
import {batchActions, enableBatching, batchDispatchMiddleware} from 'redux-batched-actions';
import {createAction} from 'redux-actions';

const doThing = createAction('DO_THING')
const doOther = createAction('DO_OTHER')

function reducer(state, action) {
	switch (action.type) {
		case 'DO_THING': return 'thing'
		case 'DO_OTHER': return 'other'
		default: return state
	}
}

const store = createStore(enableBatching(reducer), '')

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(batchActions([doThing(), doOther()]))
// OR
store.dispatch(batchActions([doThing(), doOther()], 'DO_BOTH'))