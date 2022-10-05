import { createAction, createReducer, on } from "@ngrx/store";

export const loginReducer = createReducer(
  { maskUserName: false },

  on(createAction('[user] maskUserName'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
