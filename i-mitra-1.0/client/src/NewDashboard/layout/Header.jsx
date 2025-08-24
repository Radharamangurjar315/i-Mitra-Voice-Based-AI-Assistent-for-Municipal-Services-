import React from "react";
import { Menu } from "lucide-react";
import logo from "../../../LandingPage/src/assets/iMitraLogo.png";
import { motion } from "framer-motion";

const Header = ({ onMenuClick, user, onLogout }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>
          <div className="cursor-pointer select-none" title="Go to dashboard">
           <motion.div
          variants={{ hidden: { x: -30, opacity: 0 }, show: { x: 0, opacity: 1 } }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="i-Mitra Logo"
            className="h-10 w-auto"  // yahan se size control karna
          />
          <span className="text-xl font-bold text-emerald-800 hover:text-blue-600 transition-colors">
            i-Mitra
          </span>
        </motion.div>
            <div className="text-[11px] uppercase tracking-widest text-emerald-500">
              Citizen
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-semibold text-gray-800 leading-tight">
              {user?.fullName || "Citizen"}
            </span>
            <span className="text-xs text-gray-500">
              {user?.zone ? `Zone: ${user.zone}` : "Welcome"}
            </span>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:from-emerald-700 hover:to-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
