import React from "react";

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Recipe Search</h1>
  </header>
);

export default Header;
<<<<<<< HEAD
const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};
=======
const mapDispatchToProps = dispatch => ({
    onClickDelete: payload =>
      dispatch({ type: DELETE_ARTICLE, payload })
  });
>>>>>>> 920ebaf (adding dispatch method to header file)
