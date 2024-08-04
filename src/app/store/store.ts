import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../../features/scratch/textSlice";
import { eventSlice } from "../../features/events/eventSlice";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    events: eventSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
