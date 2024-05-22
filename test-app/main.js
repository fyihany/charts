const ctx = document.getElementById("myChart").getContext("2d")

const labels = [
    "2020",
    "2021",
    "2022",
    "2023"
]

const data = {
    labels,
    datasets: [{
        label: "Celkové tržby",
        data: [1000, 2000, 1500, 2500],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false
    }],
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true
    }
}

const myChart = new Chart(ctx, config)