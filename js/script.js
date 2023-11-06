const membriTeam = [
    membro1 = {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        imgMember: "wayne-barnett-founder-ceo.jpg"
    },
    membro2 = {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        imgMember: "angela-caroll-chief-editor.jpg"
    },
    membro3 = {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        imgMember: "walter-gordon-office-manager.jpg"
    },
    membro4 = {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        imgMember: "angela-lopez-social-media-manager.jpg"
    },
    membro5 = {
        nome: "Scott Estrada",
        ruolo: "Developer",
        imgMember: "scott-estrada-developer.jpg"
    },
    membro6 = {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        imgMember: "barbara-ramos-graphic-designer.jpg"
    }
]; 
console.log(membriTeam);

const row = document.querySelector(".row")
let teemMemb = "";

for (let i = 0; i < membriTeam.length; i++) {
    const curMember = membriTeam[i];
    console.log(curMember.nome, curMember.ruolo, curMember.imgMember);
    teemMemb += 
   `<div class="col my-2">
        <div class="card w-75">
            <img src="img/${curMember.imgMember}" class="card-img-top " alt="img profilo">
            <div class="card-body">
                <h5 class="card-title">${curMember.nome}</h5>
                <p class="card-text">${curMember.ruolo}</p>
            </div>
        </div>
    </div>`
}

row.innerHTML = teemMemb;