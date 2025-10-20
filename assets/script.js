    const teamMembers = [
      { name: "Marco Bianchi", role: "Designer", email: "marcobianchi@team.com", img: "assets/img/male1.png" },
      { name: "Laura Rossi", role: "Front-end Developer", email: "laurarossi@team.com", img: "assets/img/female1.png" },
      { name: "Giorgio Verdi", role: "Back-end Developer", email: "giorgioverdi@team.com", img: "assets/img/male2.png" },
      { name: "Marta Ipsum", role: "SEO Specialist", email: "martarossi@team.com", img: "assets/img/female2.png" },
      { name: "Roberto Lorem", role: "SEO Specialist", email: "robertolorem@team.com", img: "assets/img/male3.png" },
      { name: "Daniela Amet", role: "Analyst", email: "danielaamet@team.com", img: "assets/img/female3.png" }
    ];


    const container = document.getElementById("team-container");

    function addMemberCard(member) {
      container.innerHTML += `
        <div class="card">
          <div class="photo">
            <img src="${member.img}" alt="${member.name}" onerror="
              this.onerror=null; 
              this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'><rect width=\'100%25\' height=\'100%25\' fill=\'%23ddd\'/><text x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'20\' fill=\'%23999\' text-anchor=\'middle\' dominant-baseline=\'middle\'>No image</text></svg>';
            ">
          </div>
          <div class="info">
            <h3 class="name">${member.name}</h3>
            <p class="role">${member.role}</p>
            <a class="email" href="mailto:${member.email}">${member.email}</a>
          </div>
        </div>
      `;
    }