const ctx = document.getElementById('card1Metric').getContext('2d');

    const chart1 = new Chart(ctx, {
      type: 'pie', 
      data: {
        labels: ['Benefits', 'Risks'],
        datasets: [{
          label: 'percentage',
          data: [70, 30],
          backgroundColor: [
            'rgba(51, 98, 228, 1)',
            'rgba(172, 161, 150, 1)'
          ],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
          
        }
      }
    });




    const ctx2 = document.getElementById('card2Metric').getContext('2d');

    const chart2 = new Chart(ctx2,{
      type: 'line' ,
      data: {
        labels: ['Mon','Tue','Wed','Thur','Fri','Satu','Sund'],
        datasets: [{
          label: 'Threats Blocked',
          data:[5,7,3,8,13,7,4],
         borderColor: '#d4b112ff',  
         backgroundColor: '#000000ff',
            fill: false,
           tension: 0.3

        }]


      },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
      scales: {
        y:{
          beginAtZero:true,
          title:{
            display: true,
            text: 'Threats Blocked'
          }
      },
      x:{
        title:{
          display:true,
          text:'Day'
        }
      }
    }

    }
  });





  const ctx3 = document.getElementById('card3Metric').getContext('2d')

  const chart3 = new Chart(ctx3,{
    type: 'bar',
    data: {
      labels: ['Videos','Photos','Documents','Music'],
      datasets: [{
        label: 'Stored In cloud',
        data: [70,150,200,230],
        backgroundColor:'#b9ae8fff',
        borderColor: '#6d5b0bff',
       borderWidth: 1
      }]
      
    },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      }
    },
    
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cloud Storage Used'
        }
      },
      x: {
        title: {
          display: true,
          text: 'File Types'
        }
      }
    }
  }
}
);
    



  const ctx4 = document.getElementById('card4Metric').getContext('2d')
 const chart4 = new Chart(ctx4,{
  type: "doughnut",
  data: {
    labels: ["Secure", "At Risk"],
    datasets: [{
      data: [85, 15],
      backgroundColor: ["rgba(51, 98, 228, 1)", "#b9ae8fff"]
    }]
  },
  options: {
    cutout: "75%",
    plugins: {
      legend: { position: "right" }
    }
  }
});

const ctx5 = document.getElementById('card5Metric').getContext('2d')
 const chart5 = new Chart(ctx5,{
type: "bar",
  data: {
    labels: ["Firewall", "VPN", "IDS", "Antivirus"],
    datasets: [{
      label: "Protection Score",
      data: [90, 80, 60, 85],
      backgroundColor: "rgba(51, 98, 228, 1)"
    }]
  },
  options: {
    scales:{
      y: {
        min: 0,
          max: 100,
        title: {
          display: true,
          text: 'Protection Score'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Network Security Types'
        }
      }
    }
  }
});








const ctx6 = document.getElementById('card6Metric').getContext('2d')
 const chart6 = new Chart(ctx6,{
 type: "bar",
  data: {
    labels: ["Startup Repair", "Safe Mode", "System Recovery", "Boot Logs"],
    datasets: [{
      label: "Effectiveness (%)",
      data: [80, 90, 60, 70],
      backgroundColor:'rgba(51, 98, 228, 1)',
        borderColor: '#d9caf5ff',
       borderWidth: 3
    }]
  },
  options: {
    scales: {y: {
        min: 0,
          max: 100,
        title: {
          display: true,
          text: 'Effectiveness'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Failure Recovery Tools'
        }
      }
    }
  }
});





const ctx7 = document.getElementById('card7Metric').getContext('2d')
 const chart7 = new Chart(ctx7,{
    type: 'line',
    data: {
      labels: ['Gaming', 'Productivity', 'Lifestyle', 'Others'],
      datasets: [{
        label: 'App Usage (%)',
        data: [40, 25, 20, 15],
        borderColor: 'rgba(12, 11, 85, 1)',
        backgroundColor: '#d9caf5ff',
        tension: 0.5,
        fill: false,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
        }
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: 'Usage (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'App Categories'
          }
        }
      }
    }
  });