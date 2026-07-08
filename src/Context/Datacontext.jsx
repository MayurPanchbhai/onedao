/** @format */

import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [user, setUser] = useState([
    { email: "mayurpanchbhai21@gmail.com", password: "123456" },
  ]);

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
    <DataContext.Provider value={{ user, tableData, topDrivers }}>
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
