import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

// set initial state and actions/methods

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  //Get User

  //Get Repos

  //Clear Users

  //Set Laoding

  return (
    <githubContext.Provider
      value={{
        users: state.user,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
