/** @format */

import { createContext, useContext, useState } from "react";
import {
  LayoutDashboard,
  Newspaper,
  UserCheck,
  CarTaxiFront,
  Users,
  CircleDollarSign,
  Globe,
  Car,
  GitBranch,
  ShieldAlert,
  SlidersHorizontal,
} from "lucide-react";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  // Data for stats
  const STATS_DATA = {
    "Aug 2021": [
      { month: "Jan", grade: 2.1, exams: 1 },
      { month: "Feb", grade: 2.3, exams: 2 },
      { month: "Mar", grade: 2.8, exams: 1 },
      { month: "Apr", grade: 3.2, exams: 4 },
      { month: "May", grade: 3.0, exams: 3 },
      { month: "Jun", grade: 3.5, exams: 5 },
      { month: "Jul", grade: 3.1, exams: 2 },
      { month: "Aug", grade: 3.0, exams: 4 },
      { month: "Sep", grade: 3.4, exams: 3 },
      { month: "Oct", grade: 3.7, exams: 6 },
      { month: "Nov", grade: 3.9, exams: 4 },
      { month: "Dec", grade: 4.0, exams: 5 },
    ],
    "Sep 2021": [
      { month: "Jan", grade: 2.5, exams: 2 },
      { month: "Feb", grade: 2.7, exams: 3 },
      { month: "Mar", grade: 3.0, exams: 2 },
      { month: "Apr", grade: 3.1, exams: 5 },
      { month: "May", grade: 3.4, exams: 4 },
      { month: "Jun", grade: 3.2, exams: 3 },
      { month: "Jul", grade: 3.6, exams: 6 },
      { month: "Aug", grade: 3.5, exams: 5 },
      { month: "Sep", grade: 3.8, exams: 7 },
      { month: "Oct", grade: 3.9, exams: 5 },
      { month: "Nov", grade: 4.0, exams: 6 },
      { month: "Dec", grade: 4.2, exams: 8 },
    ],
    "Oct 2021": [
      { month: "Jan", grade: 2.6, exams: 3 },
      { month: "Feb", grade: 2.8, exams: 2 },
      { month: "Mar", grade: 2.9, exams: 4 },
      { month: "Apr", grade: 3.3, exams: 5 },
      { month: "May", grade: 3.5, exams: 3 },
      { month: "Jun", grade: 3.4, exams: 4 },
      { month: "Jul", grade: 3.8, exams: 5 },
      { month: "Aug", grade: 3.6, exams: 6 },
      { month: "Sep", grade: 3.9, exams: 4 },
      { month: "Oct", grade: 4.1, exams: 7 },
      { month: "Nov", grade: 4.2, exams: 5 },
      { month: "Dec", grade: 4.3, exams: 6 },
    ],
    "May 2022": [
      { month: "Jan", grade: 3.0, exams: 4 },
      { month: "Feb", grade: 3.2, exams: 3 },
      { month: "Mar", grade: 3.1, exams: 5 },
      { month: "Apr", grade: 3.5, exams: 6 },
      { month: "May", grade: 3.8, exams: 8 },
      { month: "Jun", grade: 3.6, exams: 4 },
      { month: "Jul", grade: 3.4, exams: 3 },
      { month: "Aug", grade: 3.7, exams: 5 },
      { month: "Sep", grade: 3.9, exams: 6 },
      { month: "Oct", grade: 4.0, exams: 7 },
      { month: "Nov", grade: 4.2, exams: 5 },
      { month: "Dec", grade: 4.5, exams: 9 },
    ],
    "Nov 2022": [
      { month: "Jan", grade: 3.2, exams: 5 },
      { month: "Feb", grade: 3.4, exams: 4 },
      { month: "Mar", grade: 3.6, exams: 6 },
      { month: "Apr", grade: 3.5, exams: 5 },
      { month: "May", grade: 3.9, exams: 7 },
      { month: "Jun", grade: 4.1, exams: 8 },
      { month: "Jul", grade: 4.0, exams: 6 },
      { month: "Aug", grade: 4.2, exams: 7 },
      { month: "Sep", grade: 4.3, exams: 8 },
      { month: "Oct", grade: 4.5, exams: 9 },
      { month: "Nov", grade: 4.6, exams: 10 },
      { month: "Dec", grade: 4.4, exams: 7 },
    ],
    "Mar 2023": [
      { month: "Jan", grade: 3.5, exams: 6 },
      { month: "Feb", grade: 3.7, exams: 7 },
      { month: "Mar", grade: 3.9, exams: 9 },
      { month: "Apr", grade: 4.0, exams: 8 },
      { month: "May", grade: 4.2, exams: 7 },
      { month: "Jun", grade: 4.1, exams: 6 },
      { month: "Jul", grade: 4.3, exams: 8 },
      { month: "Aug", grade: 4.5, exams: 9 },
      { month: "Sep", grade: 4.6, exams: 7 },
      { month: "Oct", grade: 4.8, exams: 11 },
      { month: "Nov", grade: 4.9, exams: 10 },
      { month: "Dec", grade: 5.0, exams: 12 },
    ],
  };

  const TIMEFRAMES = Object.keys(STATS_DATA);

  // Data for left navbar
  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Orders", icon: Newspaper },
    { label: "Rides", icon: UserCheck },
    { label: "Clients", icon: Users },
    { label: "Drivers", icon: CarTaxiFront },
    { label: "Shift", icon: CircleDollarSign },
    { label: "Live map", icon: Globe },
    { label: "Car classes", icon: Car },
    { label: "Branches", icon: GitBranch },
    { label: "Moderators", icon: ShieldAlert },
    { label: "Settings", icon: SlidersHorizontal },
  ];

  // Bottom user table data
  const tableData = [
    {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "simple",
      time: "04.12.2021 20:30",
      start: "Kumarik ko'chasi Furkat Street, Tashkent",
      finish: "Kat Street, Tashkent",
      income: "50 300 000 SUM",
      imgUrl:
        "https://img.magnific.com/free-photo/portrait-man-with-freckles-beauty-marks_23-2151724252.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "otra",
      time: "04.12.2021 20:24",
      start: "21 Hamidulla Oripov ko'chasi, Tashkent",
      finish: "ov ko'chasi, Tashkent",
      income: "300 000 SUM",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboJ5LWpSdiez0WBSGZcdr4ls6rCam4yMqmfa4u9O1dA&s=10s",
    },
    {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "convenient",
      time: "04.12.2021 20:23",
      start: "76 Kumarik ko'chasi, Тошкент",
      finish: "76 Kumarik ko'chasi",
      income: "5 300 000 SUM",
      imgUrl:
        "https://img.magnific.com/free-photo/portrait-man-with-freckles-beauty-marks_23-2151724252.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "convenient",
      time: "17.11.2021 12:19",
      start: "13 Kumarik ko'chasi, Tashkent",
      finish: "13 Kumarik ko'chasi, Tashkent",
      income: "500 300 000 SUM",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboJ5LWpSdiez0WBSGZcdr4ls6rCam4yMqmfa4u9O1dA&s=10s",
    },
    {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      comfort: "convenient",
      time: "04.12.2021 20:30",
      start: "1 Kuyi Talarik ko'chasi, Tashkent",
      finish: "1 Kuyi Talarik ko'chasi, Tashkent",
      income: "50 300 000 SUM",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboJ5LWpSdiez0WBSGZcdr4ls6rCam4yMqmfa4u9O1dA&s=10s",
    },
  ];

  // Right side top drivers list
  const topDrivers = [
    {
      name: "Maharrm Hasanli",
      phone: "+998 (99) 436-46-15",
      orders: 5,
      income: "$ 98",
      Imgurl:
        "https://img.magnific.com/free-photo/portrait-man-with-freckles-beauty-marks_23-2151724252.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Gina Garza",
      phone: "+998 (99) 158-10-15",
      orders: 5,
      income: "$ 15",
      Imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboJ5LWpSdiez0WBSGZcdr4ls6rCam4yMqmfa4u9O1dA&s=10s",
    },
    {
      name: "Brian Reed",
      phone: "+998 (95) 489-46-20",
      orders: 5,
      income: "$ 23",
      Imgurl:
        "https://img.magnific.com/free-photo/portrait-man-with-freckles-beauty-marks_23-2151724252.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Tammy Spencer",
      phone: "+998 (95) 785-10-02",
      orders: 5,
      income: "$ 93",
      Imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboJ5LWpSdiez0WBSGZcdr4ls6rCam4yMqmfa4u9O1dA&s=10s",
    },
    {
      name: "Joseph Books",
      phone: "+998 (99) 436-46-15",
      orders: 5,
      income: "$ 98",
      Imgurl:
        "https://img.magnific.com/free-photo/portrait-man-with-freckles-beauty-marks_23-2151724252.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Juan Steward",
      phone: "+998 (99) 436-46-15",
      orders: 5,
      income: "$ 98",
      Imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboJ5LWpSdiez0WBSGZcdr4ls6rCam4yMqmfa4u9O1dA&s=10s",
    },
  ];

  return (
    <DataContext.Provider
      value={{
        tableData,
        topDrivers,
        menuItems,
        TIMEFRAMES,
        STATS_DATA,
      }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
