import React from "react";

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Recipe Search</h1>
  </header>
);

export default Header;
const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
});
export default Header;
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
const mapDispatchToProps = dispatch => ({
    onClickDelete: payload =>
      dispatch({ type: DELETE_ARTICLE, payload })
  });
  const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
      dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value =>
      dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (email, password) =>
      dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
    onUnload: () =>
      dispatch({ type: LOGIN_PAGE_UNLOADED })
  });