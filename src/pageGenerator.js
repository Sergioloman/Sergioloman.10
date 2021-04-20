const generateTeam = team => {

// render manager card

    const managerCard = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
          <p class="card-text">${manager.getId()}</p>
          <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
          <p class="card-text">${manager.getOfficeNumber()}</p>
        </div>
      </div>
        `
    }

    const html = [];

    html.push(team.filter( employee=> employee.getRole() === 'Manager')
        .map( manager => managerCard(manager))
        .join("") 
    )
    //create a filter by engineer
    // html.push(team.filter( employee=> employee.getRole() === 'Engineer')
    // .map( engineer => engineerCard(engineer))
    // .join("") 
    //do same for intern


    return html.join("")


}

module.exports = team=>{
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Title</title>
    </head>
    <body>

    ${generateTeam(team)}
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.4/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/js/bootstrap.min.js"></script>
    </body>
    </html>
    `
}