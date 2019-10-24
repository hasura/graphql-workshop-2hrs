import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import App from '../App';

const brand = require('../../images/blue-logo.svg');

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isTokenSet, setIsToken] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  // fetch token from localStore
  const localToken = window.localStorage.getItem("hasura-token");
  if (localToken || isTokenSet) {
    return (<App token={localToken} />);
  }
  return (
    <div>
      <div className="loginWrapper">
        <div className="header">GraphQL Tutorial App</div>
        <div className="brand">
          <img src={brand} alt={"Logo"} />
        </div>
        <Tabs className="loginTabWrapper" selectedIndex={ tabIndex } onSelect={(index) => setTabIndex(index) }>
          <TabList className="loginTabListWrapper">
            <Tab className={"loginTabList " + (tabIndex === 0 ? " loginTabListActive" : " ")}>LOGIN</Tab>
            <Tab className={"loginTabList " + (tabIndex === 1 ? " loginTabListActive" : " ")}>SIGN UP</Tab>
          </TabList>
          <TabPanel className="loginTabPanel">
            <div className="InputContainer">
              <input
                className="InputElement form-control"
                type="text"
                placeholder="Email"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="InputContainer">
              <input
                className="InputElement form-control"
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="loginBtn">
              <button
                onClick={() => {
                  setIsLoggingIn(true);
                  fetch("http://localhost:8000/login", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ username: username, password: password })
                  }).then(response => response.json())
                  .then(data => {
                    if(data.token) {
                      window.localStorage.setItem("hasura-token", data.token);
                      setIsToken(true);
                    } else if(data.error) {
                      alert(data.error);
                      setIsLoggingIn(false);
                    } else {
                      alert("User not registered. Sign up first");
                      setIsLoggingIn(false);
                    }
                  });
                }}
              >{isLoggingIn ? "Logging in..." : "Log In"}</button>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="InputContainer">
              <input
                className="InputElement form-control"
                type="text"
                placeholder="Email"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="InputContainer">
              <input
                className="InputElement form-control"
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="loginBtn">
              <button
                onClick={() => {
                  setIsLoggingIn(true);
                  fetch("http://localhost:8000/signup", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ username: username, password: password })
                  }).then(response => response.json())
                  .then(data => {
                    if(data.token) {
                      window.localStorage.setItem("hasura-token", data.token);
                      setIsToken(true);
                    } else {
                      alert("User already registered / Please try again");
                      setIsLoggingIn(false);
                    }
                  });
                }}
              >{isLoggingIn ? "Signing up...": "Sign up"}</button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
