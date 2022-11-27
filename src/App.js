import { useState,useEffect } from "react";
import '../public/Sample_Submission.css';
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

function App() {
   
   //fetch data from port 5000
    const [data3, setData] = useState([]);
    const [table,setTable] = useState();
    const [negative, setNegative] = useState();
    const [none, setNone] = useState();
    const [study, setStudy] = useState();
    const [image, setImage] = useState();
    
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [third, setThird] = useState();
    const [fourth, setFourth] = useState();
    const [fifth, setFifth] = useState();

    const [select,setSelect] = useState();

    let bar = null;
    const labels = ["negative", "none","study","image","1","0","0","1","1"];
    const options = {
      indexAxis: 'y',
      elements: {
          bar: {
            borderWidth: 2,
          },
        },
        plugins: {
          legend: {
            position: 'right',
          },
        }
  }


    function get_data(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => setData(data))
    
      
  
    const table = data3.map((item) => (
        <tr>
            <td>{item.id}</td>
            <td>{item.PredictionString}</td>

        </tr>
    ));
    setTable(table);
    
    const csv_predict = data3.map((item) => (
        item.PredictionString
    ));
    
    const csv_id = data3.map((item) => (
        item.id
    ));
    
    //split in id string "_"
    const csv_id_split = csv_id.map((item) => (
        item.split("_")
    ));

    
    let count_study = 0;
    let count_image = 0;
    let count_negative = 0;
    let count_none = 0;
    let First = 0;
    let Second = 0;
    let Third = 0;
    let Fourth = 0;
    let Fifth = 0;

    //count negative, none
    for (let i = 0; i < csv_predict.length; i++) {
        if (csv_predict[i].includes("negative")) {
            count_negative++;
            
        }
        setNegative(count_negative);

        if (csv_predict[i].includes("none")) {
            count_none++;
        }
        setNone(count_none);
    }

    //count study, image
    for (let i = 0; i < csv_id_split.length; i++) {
        if (csv_id_split[i][1] == "study") {
            count_study++;
        }
        setStudy(count_study);
        if (csv_id_split[i][1] == "image") {
            count_image++;
        }
        setImage(count_image);
    }
    
    //split " "
    const csv_predict_split = csv_predict.map((item) => (
        item.split(" ")
    ));

    //slice 0
    
    for (let i = 0; i < csv_predict_split.length; i++) {
      if (csv_predict_split[i][1] === "1") {
        First++;
      }
     
      if (csv_predict_split[i][2] === "0") {
        Second++;
      }
  
      if (csv_predict_split[i][3] === "0") {
        Third++;
      }
      if (csv_predict_split[i][4] === "1") {
        Fourth++;
      }
      if (csv_predict_split[i][5] === "1") {
        Fifth++;
      }
    }
    setFirst(String(First));
    setSecond(String(Second));
    setThird(String(Third));
    setFourth(String(Fourth));
    setFifth(String(Fifth));

    setSelect("sample");

  }

  const data = {
    labels,
    datasets: [
      {
        label: ["negative", "none","study","image","1","0","0","1","1"],
        data: [negative, none, study, image,first,second,third,fourth,fifth],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(53, 162, 235, 0.5)", "rgba(60, 115, 74, 0.5)", "rgba(184, 113, 74, 0.5)", "rgba(42, 64, 74, 0.5)", "rgba(57, 49, 25, 0.5)", "rgba(213, 236, 74, 0.5)", "rgba(213, 147, 247, 0.5)", "rgba(57, 255, 25, 0.5)"],
      },
    ],
  };


  const graph = null
  if(select === 'sample'){
    bar = <Bar data={data} options={options}/>
  }
 
  return(
     <div className="container-sm">
    <button onClick={get_data} className="btn btn-outline-success">Sample_Submission</button>
    <div className="container csv">
        <table className="table">
          {table}</table> 
    </div>
    <div className="Bar">
      {bar}
    </div>
        </div>
  );
}

export default App;
