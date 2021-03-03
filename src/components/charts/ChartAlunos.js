import React from "react";
import Chart from "chart.js";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import baseUrl from '../../utils/baseUrl'
export default class ChartAlunos extends React.Component {
  state = {
    quantity: '',
  };

  componentDidMount() {
    Axios.get(`${baseUrl}/quantity/alunos`)
      .then((res) => {
this.setState({
    quantity:res.data
})

        var ctx = document.getElementsByClassName("myChart");
        Chart.defaults.global.defaultFontColor = "black";
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            datasets: [
              {
                label: "Quantidade de Alunos/Meses",
                data: this.state.quantity,
                backgroundColor: [
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                  "rgb(76, 175, 80)",
                ],

                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.quantity ? (
          <canvas
            className="myChart"
            style={{ height: "100%", width: "100%" }}
          />
        ) : (
          <CircularProgress style={{ color: "rgb(76, 175, 80)" }} />
        )}
      </div>
    );
  }
}
