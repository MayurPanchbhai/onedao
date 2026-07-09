/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useData } from "../Context/Datacontext";

export function Stats() {
  const { STATS_DATA, TIMEFRAMES } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPeriod = TIMEFRAMES[currentIndex];
  const chartData = STATS_DATA[currentPeriod];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < TIMEFRAMES.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <div
        className="bg-white p-4 rounded-4 shadow-sm border border-light mb-4 "
        style={{ height: "73%" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="m-0 fs-6 fw-normal text-dark">Statistic</h6>
          <div className="d-flex align-items-center gap-2 small text-muted">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={handlePrev}
              style={{
                cursor: currentIndex > 0 ? "pointer" : "not-allowed",
                opacity: currentIndex > 0 ? 1 : 0.3,
              }}
            />
            <span className="text-dark">{currentPeriod}</span>{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={handleNext}
              style={{
                cursor:
                  currentIndex < TIMEFRAMES.length - 1
                    ? "pointer"
                    : "not-allowed",
                opacity: currentIndex < TIMEFRAMES.length - 1 ? 1 : 0.3,
              }}
            />
          </div>
        </div>

        <div className=" gap-3 mb-4 d-flex justify-content-between  small fw-medium">
          <p className="fw-bold">Progess Score</p>

          <div className="d-flex justify-contect-between">
            <span className="text-primary d-flex align-items-center px-3 gap-1">
              <p className="fs-6">●</p>
              <p className="text-dark">Average grade</p>
            </span>
            <span className="text-success d-flex  align-items-center gap-1">
              <p className="fs-6">●</p> <p className="text-dark">Exams</p>
            </span>
          </div>
        </div>

        <div style={{ width: "100%", height: "70%" }}>
          <ResponsiveContainer>
            <ComposedChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={({ x, y, payload }) => (
                  <text
                    x={x}
                    y={y + 12}
                    textAnchor="middle"
                    fill={payload.value === "Aug" ? "#212529" : "#6c757d"}
                    fontWeight={payload.value === "Aug" ? "bold" : "normal"}
                    style={{ fontSize: "0.75rem" }}>
                    {payload.value}
                  </text>
                )}
              />
              <YAxis tickLine={false} axisLine={false} tick={false} />

              <Tooltip
                cursor={{ type: "rectangle", fill: "#f1f3f5", opacity: 0.7 }}
                contentStyle={{
                  backgroundColor: "#212529",
                  borderRadius: "8px",
                  border: "none",
                  color: "#fff",
                  fontSize: "0.8rem",
                }}
                itemStyle={{ color: "#fff" }}
              />

              <Bar
                dataKey="grade"
                fill="transparent"
                legendType="none"
                tooltipType="none"
                activeBar={false}
              />

              <Line
                type="monotone"
                dataKey="grade"
                stroke="#0d6efd"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="exams"
                stroke="#198754"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
