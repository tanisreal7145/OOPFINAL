import React from "react";
import Container from "react-bootstrap/Container";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const all_data = require("./negative_none.json");

const labels = ["Study","Image","Negative","None","firstc0l_1","secc0l_0","thirdc0l_0","fourthc0l_1","fifthc0l_1"];

export const data = {
  labels,
  datasets: [
    {
        label: ["chart"],
        data: [all_data.Study, all_data.Image,all_data.Negative, all_data.None,all_data.First_number_col,all_data.Second_number_col,all_data.Third_number_col,all_data.Forth_number_col,all_data.Fifth_number_col],
        backgroundColor: ["rgba(168, 228, 160, 0.5)", 
        "rgba(162, 162, 208, 0.5)",
        "rgba(168, 228, 160, 0.5)",
        "rgba(162, 162, 208, 0.5)",
        "rgba(168, 228, 160, 0.5)", 
        "rgba(162, 162, 208, 0.5)",
        "rgba(168, 228, 160, 0.5)",
        "rgba(162, 162, 208, 0.5)",
        "rgba(168, 228, 160, 0.5)"],
    },
  ],
};

export default function Bar1() {
  return (
    <Container className="container-sm">
      <div>
        <Bar data={data}/>
      </div>
    </Container>
  );
}