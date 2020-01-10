import { applyMiddleware, createStore } from 'redux';
// import { Provider } from 'react-redux';
import  reducers  from "./reducers";

const configureStore = () => {
    const store = createStore(
        reducers
    );

    return store;
}

export default configureStore;