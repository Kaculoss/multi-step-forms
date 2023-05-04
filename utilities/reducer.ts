import { REDUCER_ACTION_TYPE } from "./action";
import { WebStateType } from "./types";

type ReducerAction = { type: REDUCER_ACTION_TYPE; payload?: any };

export const reducer = (
  state: WebStateType,
  action: ReducerAction
): WebStateType => {
  if (action.type === REDUCER_ACTION_TYPE.SET_SLIDE_FROM_NEXT_TRUE) {
    return { ...state, slide_from_next: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_SLIDE_FROM_NEXT_FALSE) {
    return { ...state, slide_from_next: false };
  }

  if (action.type === REDUCER_ACTION_TYPE.NEXT_TO_SELECT_PLAN) {
    return {
      ...state,
      personal_info: false,
      select_plan: true,
      add_ons: false,
      summary: false,
      thank_you: false,
      buttons: true,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.NEXT_TO_ADD_ONS) {
    return {
      ...state,
      personal_info: false,
      select_plan: false,
      add_ons: true,
      summary: false,
      thank_you: false,
      buttons: true,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.NEXT_TO_SUMMARY) {
    return {
      ...state,
      personal_info: false,
      select_plan: false,
      add_ons: false,
      summary: true,
      thank_you: false,
      buttons: true,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.CONFIRM_TO_THANK_YOU) {
    return {
      ...state,
      personal_info: false,
      select_plan: false,
      add_ons: false,
      summary: false,
      thank_you: true,
      buttons: false,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.BACK_TO_ADD_ONS) {
    return {
      ...state,
      personal_info: false,
      select_plan: false,
      add_ons: true,
      summary: false,
      thank_you: false,
      buttons: true,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.BACK_TO_SELECT_PLAN) {
    return {
      ...state,
      personal_info: false,
      select_plan: true,
      add_ons: false,
      summary: false,
      thank_you: false,
      buttons: true,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.BACK_TO_PERSONAL_INFO) {
    return {
      ...state,
      personal_info: true,
      select_plan: false,
      add_ons: false,
      summary: false,
      thank_you: false,
      buttons: true,
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_PERSONAL_NAME) {
    let inputItem = action.payload;
    let inputErr;
    let inputErrMsg;

    if (inputItem === "") {
      inputErr = true;
      inputErrMsg = "This field is required";
    } else if (inputItem.length <= 2) {
      inputErr = true;
      inputErrMsg = "At least 3 characters is required";
    } else {
      inputErr = false;
      inputErrMsg = "";
    }

    return {
      ...state,
      personal_name: {
        ...state.personal_name,
        item: inputItem,
        ErrMsg: inputErrMsg,
        isErr: inputErr,
      },
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_PERSONAL_EMAIL) {
    let inputItem = action.payload;
    let inputErr;
    let inputErrMsg;

    if (inputItem === "") {
      inputErr = true;
      inputErrMsg = "This field is required";
    } else if (
      !inputItem.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ) {
      inputErr = true;
      inputErrMsg = "Please enter a valid email";
    } else {
      inputErr = false;
      inputErrMsg = "";
    }

    return {
      ...state,
      personal_email: {
        ...state.personal_email,
        item: inputItem,
        ErrMsg: inputErrMsg,
        isErr: inputErr,
      },
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_PERSONAL_NUMBER) {
    let inputItem = action.payload;
    let inputErr;
    let inputErrMsg;

    if (inputItem === "") {
      inputErr = true;
      inputErrMsg = "This field is required";
    } else if (!inputItem.match(/^[\d,\s,\+,\-]{7,22}/)) {
      inputErr = true;
      inputErrMsg = "Please enter a valid number";
    } else {
      inputErr = false;
      inputErrMsg = "";
    }

    return {
      ...state,
      personal_number: {
        ...state.personal_number,
        item: inputItem,
        ErrMsg: inputErrMsg,
        isErr: inputErr,
      },
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_IS_PERSONAL_DATA_ERR_TRUE) {
    return { ...state, isPersonalDataErr: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_IS_PERSONAL_DATA_ERR_FALSE) {
    return { ...state, isPersonalDataErr: false };
  }

  if (action.type === REDUCER_ACTION_TYPE.TOGGLE_IS_YEARLY) {
    return { ...state, isYearly: !state.isYearly };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_SELECTED_PLAN) {
    return { ...state, selected_plan: action.payload };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_IS_SELECTED_PLAN_ERR_TRUE) {
    return { ...state, isSelectedPlanErr: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_IS_SELECTED_PLAN_ERR_FALSE) {
    return { ...state, isSelectedPlanErr: false };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_SELECTED_ADD_ON) {
    let selectedId = action.payload.id;
    let isAdded = state.selected_addons.find(
      (addon) => addon.id === selectedId
    );

    if (isAdded) {
      let newAddons = state.selected_addons.filter(
        (addon) => addon.id !== selectedId
      );

      return { ...state, selected_addons: [...newAddons] };
    }
    return {
      ...state,
      selected_addons: [...state.selected_addons, action.payload],
    };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_IS_ADD_ONS_ERR_TRUE) {
    return { ...state, isAddOnsErr: true };
  }

  if (action.type === REDUCER_ACTION_TYPE.SET_IS_ADD_ONS_ERR_FALSE) {
    return { ...state, isAddOnsErr: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
