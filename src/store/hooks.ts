import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '.';

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
