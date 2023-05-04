"use client";

import {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { AddOn, Plan, WebStateType } from "./types";
import { reducer } from "./reducer";
import { REDUCER_ACTION_TYPE } from "./action";

export const initialState: WebStateType = {
  slide_from_next: true,
  personal_info: true,
  select_plan: false,
  add_ons: false,
  summary: false,
  thank_you: false,
  buttons: true,
  personal_name: { item: "", isErr: true, ErrMsg: "This field is required" },
  personal_email: { item: "", isErr: true, ErrMsg: "This field is required" },
  personal_number: { item: "", isErr: true, ErrMsg: "This field is required" },
  isPersonalDataErr: false,
  isYearly: false,
  selected_plan: { name: "", prices: { mo: 0, yr: 0 } },
  isSelectedPlanErr: false,
  selected_addons: [],
  isAddOnsErr: false,
};

const useWebContext = (initialState: WebStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSlideFromNextTrue = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SLIDE_FROM_NEXT_TRUE });
  }, []);

  const setSlideFromNextFalse = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SLIDE_FROM_NEXT_FALSE });
  }, []);

  const nextToSelectPlan = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEXT_TO_SELECT_PLAN });
  }, []);

  const nextToAddOns = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEXT_TO_ADD_ONS });
  }, []);

  const nextToSummary = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEXT_TO_SUMMARY });
  }, []);

  const confirmToThankYou = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.CONFIRM_TO_THANK_YOU });
  }, []);

  const backToAddOns = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.BACK_TO_ADD_ONS });
  }, []);

  const backToSelectPlan = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.BACK_TO_SELECT_PLAN });
  }, []);

  const backToPersonalInfo = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.BACK_TO_PERSONAL_INFO });
  }, []);

  const setPersonalName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_PERSONAL_NAME,
      payload: e.target.value,
    });
  }, []);

  const setPersonalEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_PERSONAL_EMAIL,
      payload: e.target.value,
    });
  }, []);

  const setPersonalNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_PERSONAL_NUMBER,
      payload: e.target.value,
    });
  }, []);

  const setIsPersonalDataErrTrue = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_IS_PERSONAL_DATA_ERR_TRUE });
  }, []);

  const setIsPersonalDataErrFalse = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_IS_PERSONAL_DATA_ERR_FALSE });
  }, []);

  const toggleIsYearly = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_IS_YEARLY });
  }, []);

  const setSelectedPlan = useCallback((payload: Plan) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SELECTED_PLAN, payload });
  }, []);

  const setIsSelectedPlanErrTrue = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_IS_SELECTED_PLAN_ERR_TRUE });
  }, []);

  const setIsSelectedPlanErrFalse = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_IS_SELECTED_PLAN_ERR_FALSE });
  }, []);

  const setSelectedAddon = useCallback((payload: AddOn) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SELECTED_ADD_ON, payload });
  }, []);

  const setIsAddOnsErrTrue = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_IS_ADD_ONS_ERR_TRUE });
  }, []);

  const setIsAddOnsErrFalse = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_IS_ADD_ONS_ERR_FALSE });
  }, []);

  return {
    ...state,
    setSlideFromNextTrue,
    setSlideFromNextFalse,
    nextToSelectPlan,
    nextToAddOns,
    nextToSummary,
    confirmToThankYou,
    backToAddOns,
    backToSelectPlan,
    backToPersonalInfo,
    setPersonalName,
    setPersonalEmail,
    setPersonalNumber,
    setIsPersonalDataErrTrue,
    setIsPersonalDataErrFalse,
    toggleIsYearly,
    setSelectedPlan,
    setIsSelectedPlanErrTrue,
    setIsSelectedPlanErrFalse,
    setSelectedAddon,
    setIsAddOnsErrTrue,
    setIsAddOnsErrFalse,
  };
};

type UseWebContextType = ReturnType<typeof useWebContext>;

const initialContextState: UseWebContextType = {
  ...initialState,
  setSlideFromNextTrue: () => {},
  setSlideFromNextFalse: () => {},
  nextToSelectPlan: () => {},
  nextToAddOns: () => {},
  nextToSummary: () => {},
  confirmToThankYou: () => {},
  backToAddOns: () => {},
  backToSelectPlan: () => {},
  backToPersonalInfo: () => {},
  setPersonalName: (e: ChangeEvent<HTMLInputElement>) => {},
  setPersonalEmail: (e: ChangeEvent<HTMLInputElement>) => {},
  setPersonalNumber: (e: ChangeEvent<HTMLInputElement>) => {},
  setIsPersonalDataErrTrue: () => {},
  setIsPersonalDataErrFalse: () => {},
  toggleIsYearly: () => {},
  setSelectedPlan: (payload: Plan) => {},
  setIsSelectedPlanErrTrue: () => {},
  setIsSelectedPlanErrFalse: () => {},
  setSelectedAddon: (payload: AddOn) => {},
  setIsAddOnsErrTrue: () => {},
  setIsAddOnsErrFalse: () => {},
};

export const WebContext = createContext<UseWebContextType>(initialContextState);

type ChildrenType = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
};

export const WebProvider = ({ children }: ChildrenType): React.ReactElement => {
  return (
    <WebContext.Provider value={useWebContext(initialState)}>
      {children}
    </WebContext.Provider>
  );
};

export const useWeb = (): typeof initialContextState => {
  return useContext(WebContext);
};
