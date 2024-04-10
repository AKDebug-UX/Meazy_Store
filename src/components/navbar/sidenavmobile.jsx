import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";

const SideNavMobile = ({ setSideNav }) => {
  return (
    <div className="gap-4">
      <nav className="flex flex-col mb-6 items-start">
        <ul className="flex flex-col items-start justify-start gap-6">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Tech
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            Contact us
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            About us
          </a>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center gap-6">
        <a
          href="tel:+2347089624520"
          className="text-base px-4 py-2 shadow-4 bg-white border rounded-full font-medium text-gray-900 hover:text-white hover:bg-gray-900"
        >
          +2347089624520
        </a>
        <div className="flex items-center justify-center gap-3">
          <a href="mail:meazybraintech@gmail.com" className="font-bold text-[20px]">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
          <a className="font-bold text-[20px]">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a className="font-bold text-[20px]">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="font-bold text-[20px]">
            <ion-icon name="logo-tiktok"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavMobile;
