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
    