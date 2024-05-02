import React, { useState } from "react";
import Admin from "./admin";
import Login from "./core/login";

export default function App() {
  const [page, setPage] = useState("admin");
  let CurrentPage;
  switch (page) {
    case "login":
      CurrentPage = Login;
      break;
    case "admin":
      CurrentPage = Admin
      break
    default:
      CurrentPage = null;
  }

  return (
    <>
      <div>
        <CurrentPage setPage={setPage} />
      </div>
    </>
  )
}