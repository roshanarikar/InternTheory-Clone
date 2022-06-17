import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./Intership/reducer";

export default configureStore({
  reducer: {
    todo: todosReducer
  }
});
