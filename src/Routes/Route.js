import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/View/Login";
import Dashboard from "../Pages/Dasboard/View/Dashboard";
import Home from "../Pages/Home/View/Home";
import MyProfile from "../Pages/MyProfile/View/MyProfile";

import Grievances from "../Pages/Grievances/View/Grievances";

import Message from "../Pages/Message/View/Message";
import ApplyLeavePage from "../Pages/ApplyLeave/View/ApplyLeavePage";

const Routing = () => {
  return (
    <>
      <div className="note-small">
        <h1>
          Download Our App To Run Employee System In Mobile For Better View
        </h1>
        <a href={"https://play.google.com/store/apps"}>
          <button>
            Download Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </a>
      </div>
      <div className="big-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="myprofile" element={<MyProfile />} />

              <Route path="messages" element={<Message />} />
              <Route path="applyleave" element={<ApplyLeavePage />} />
              <Route path="grievances" element={<Grievances />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Routing;
