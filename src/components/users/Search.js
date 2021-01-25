import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
//////////////////props passed in and destructured here
const Search = ({ setAlert }) => {
  const githubContext = useContext(githubContext);
  //destructuring, text is the state, setText is method, "" is value of text
  const [text, setText] = useState("");

  const onChange = (e) => {
    //used e.target.name in place of "text"
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        ></input>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
