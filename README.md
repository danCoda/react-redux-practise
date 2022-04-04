# Redux practise

Redux is used to share state (data) easily between components. When state is changed, the component that uses that state is rerendered. These are my notes below. 

A. Provider is wrapped around the whole app so the app can have access to Store. 

	const logger = createLogger();
	const store = createStore(
	    allReducers,
	    applyMiddleware(thunk, promise, logger)
	);

	ReactDOM.render(
	    <Provider store={store}>
	        <App />
	    </Provider>,
	    document.getElementById('root')
	);

B. Action creaters return Action. Action is composed of a type, which is what the action is, and a payload, which is some data. Actions invoke the reducer to do something with the data.

C. Reducers are invoked by Actions, and they update the State depending on the action.type. They return the updated state. Since there will be many reducers, we combone them.

	const allReducers = combineReducers({
	    users: UserReducer,
	    activeUser: ActiveUserReducer
	});

	export default allReducers

D. Components must read from the Store and use Actions:

1. mapStateToProps - connects the store to a component's props. 

	function mapStateToProps(state) {
	    return {
	        user: state.activeUser
	    };
	}
	// We can access our state/store's activeUser, which we call as props.user.

2. matchDispatchToProps - connects our action creators (which dispatch actions) to a component's props.

	function matchDispatchToProps(dispatch){
	    return bindActionCreators({selectUser: selectUser}, dispatch);
	}
	// We can use props.selectUser() action.

3. We must connect our store and actions to our component (UserList) when we it. 

	export default connect(mapStateToProps, (optional) matchDispatchToProps)(UserList);

E. When actions are invoked through a component (e.g. props.selectUser()), it causes the Reducer to be invoked. All reducers are invoked, and it tries to match the action.type. When a matched reducer updates the State, it updates the component.  
