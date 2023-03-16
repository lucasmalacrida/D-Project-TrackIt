import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "./pages/HomePage/LoginPage";
import SignupPage from "./pages/HomePage/SignupPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}