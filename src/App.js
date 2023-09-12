import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
// import { UserAuth } from "./context/AuthContext";
import CreateUrl from "./components/CreateUrl";
import DeleteUrl from "./components/DeleteUrl";
import useFetch from "./components/useFetch";
import ErrorPage from "./components/ErrorPage";
// import Urls from "./components/Urls";

function App() {
  const { data: urls, isLoading } = useFetch;
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="dashboard"
              element={<Dashboard urls={urls} isLoading={isLoading} />}
            >
              <Route path="analytics" element={<Analytics urls={urls} />} />
              <Route path="create" element={<CreateUrl />} />
              <Route path="delete" element={<DeleteUrl />} />
              {/* <Route path="urls" element={<Urls />} /> */}
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
