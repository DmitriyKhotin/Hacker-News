import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { store } from '..';
import newsReducer from '../slice';

type NewsState = ReturnType<typeof newsReducer>;
type NewsDispatch = typeof store.dispatch;

export const useNewsDispatch = () => useDispatch<NewsDispatch>();
export const useNewsSelector: TypedUseSelectorHook<NewsState> = useSelector;
