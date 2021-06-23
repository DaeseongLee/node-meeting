
import createWrapper from "next-redux-wrapper";
import { createStore } from "redux";

const configureStore = () => {
    const store = createStore(reducer, enhancer);
}

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' }); //debug가 true이면 좀더 redux에 관해서 자세한 설명이 나옴.

export default wrapper;