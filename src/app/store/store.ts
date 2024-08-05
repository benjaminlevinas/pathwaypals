import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../../features/scratch/textSlice";
import { eventSlice } from "../../features/events/eventSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    events: eventSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
