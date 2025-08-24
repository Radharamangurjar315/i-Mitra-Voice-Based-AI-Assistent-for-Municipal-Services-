import React, { useContext, useState } from "react";
import CitizenLayout from "./CitizenLayout";
import { Header, Sidebar, Footer } from "./index";
import axios from "axios";
import { Context } from "../../main.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppCitizenShell = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      });
      setUser(null);
      setIsAuthenticated(false);
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <CitizenLayout
      header={
        <Header
          onMenuClick={() => setOpen(true)}
          user={user}
          onLogout={handleLogout}
        />
      }
      sidebar={<Sidebar open={open} onClose={() => setOpen(false)} />}
      footer={<Footer />}
    >
      {children}
    </CitizenLayout>
  );
};

export default AppCitizenShell;
