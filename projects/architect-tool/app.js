let buildingLengthEl = document.getElementById("building-length");
let buildingWidthEl = document.getElementById("building-width");
let buildingHeightEl = document.getElementById("building-height");
let backSideMemberEl = document.getElementById("back-side-member");
let frontSideMemberEl = document.getElementById("front-side-member");
let rightSideMemberEl = document.getElementById("right-side-member");
let leftSideMemberEl = document.getElementById("left-side-member");
let insulationThicknessEl = document.getElementById("insulation-thickness");
let calculate = document.getElementById("calculate");
let roofMemberEl = document.getElementById("roof-member");
let display = document.querySelector(".display");

// let panelWidthEl = document.getElementById("tin-width");  | hard code value

// declaring variable
let screws = [];
let stichScrews = [];
let roofScrews = [];
let bswScrew;
let fswScrew;
let rewScrew;
let lewScrew;
let bfStichScrew;

calculate.addEventListener("click", calculateScrewQty);

function calculateScrewQty() {
  // Converting all the value into number and storing value

  let buildingLength = Number(buildingLengthEl.value);
  let buildingWidth = Number(buildingWidthEl.value);
  let buildingHeight = Number(buildingHeightEl.value);
  let backSideMember = Number(backSideMemberEl.value);
  let frontSideMember = Number(frontSideMemberEl.value);
  let rightSideMember = Number(rightSideMemberEl.value);
  let leftSideMember = Number(leftSideMemberEl.value);
  let roofMember = Number(roofMemberEl.value);
  let panelWidth = 3;

  // selfDrillerScrew : using force approach

  bswScrew = buildingLength * (backSideMember ? backSideMember + 2 : 0); // calculating bswScrew

  fswScrew = buildingLength * (frontSideMember ? frontSideMember + 2 : 0); //calculating fswScrew

  rewScrew = buildingWidth * (rightSideMember ? rightSideMember + 2 : 0); // calculating rewScrew

  lewScrew = buildingWidth * (leftSideMember ? leftSideMember + 2 : 0); //calculating lewScrew

  // calculating back and front side stich screws
  let bfsLapping = buildingLength / panelWidth;
  bfStichScrew = Math.ceil(
    ((buildingHeight * 12) / 20) * Math.ceil(bfsLapping)
  );

  // calculating right and left side stich screws
  let rlsLapping = buildingWidth / panelWidth;
  rlsLapping = Math.ceil((buildingHeight * 12) / 20) * Math.ceil(rlsLapping);

  // CALCULATING ROOF LENGTH AND SCREW

  let roofwidth = Math.round((buildingWidth / 2) * 12); //feet
  let slope = 12; //inch
  roofwidth = Math.round(Math.sqrt(slope ** 2 + roofwidth ** 2));
  roofwidth = Math.round(roofwidth / 12);
  console.log(roofwidth);
  let roofSd = roofwidth * (roofMember + 4) * 2;
  // CREATING ARRAY OF OBJECTS
  screws.push(
    { name: "BSW", qty: bswScrew },
    { name: "FSW", qty: fswScrew },
    { name: "REW", qty: rewScrew },
    { name: "LEW", qty: lewScrew },
    { name: "Roof", qty: roofSd }
  );
  stichScrews.push(
    { name: "BSW", qty: bfStichScrew },
    { name: "FSW", qty: bfStichScrew },
    { name: "RSW", qty: rlsLapping },
    { name: "LSW", qty: rlsLapping }
  );

  // clearing input fields
  buildingLengthEl.value = "";
  buildingWidthEl.value = "";
  buildingHeightEl.value = "";
  backSideMemberEl.value = "";
  frontSideMemberEl.value = "";
  rightSideMemberEl.value = "";
  leftSideMemberEl.value = "";
  roofMemberEl.value = "";

  displayDetails(screws, stichScrews);
}

// FUNCTION FOR DISPLAYING
function displayDetails(screws, stichScrews) {
  let insulationThickness = Number(insulationThicknessEl.value);
  insulationThicknessEl.value = "";

  let screwSize;
  let screwCode;

  if (insulationThickness === null) {
    screwSize = 1.25;
  } else if (insulationThickness >= 1 && insulationThickness < 5) {
    screwSize = 1.5;
  } else if (insulationThickness >= 5) {
    screwSize = 2;
  }

  if (screwSize === 1.25) {
    screwCode = `12x1.25`;
  } else if (screwSize === 1.5) {
    screwCode = `12x1.50`;
  } else {
    screwCode = `12x2.00`;
  }

  // Creating heading for the table

  let html = `<table>
                <tr>
                  <th>Screw Type</th>
                  <th>Quantity</th>
                  <th>Screw Length</th>
                  <th>Screw Code</th>
                </tr>
                `;
  let len = screws.length;
  let stichLen = stichScrews.length;
  function render(text, name, qty) {
    if (qty > 0) {
      html += `
          <tr>
            <td>${name} ${text}</td>
            <td>${qty} pcs.</td>

      `;
      if (len) {
        html += `
        <td> ${screwSize} Inch</td>
        <td> #${screwCode} </td>
        `;
        len -= 1;
      } else if (stichLen) {
        html += `
        <td>0.875 Inch</td>
        <td>#14x.875</td>
        `;
      }
      html += `</tr>`;
    }
  }

  // iterating how many screw need [self driller screw]
  screws.forEach(({ name, qty, code }) => {
    let text = `Self Driller Screw`;
    render(text, name, qty, code);
  });

  stichScrews.forEach(({ name, qty }) => {
    let text = `Self Stich Screw`;
    render(text, name, qty);
  });

  html += `</table>`;
  display.innerHTML = html;
  screws.length = 0;
  stichScrews.length = 0;
}

// new code

// calculate.addEventListener("click", calculateScrewQty);

// function calculateScrewQty() {
//   let buildingLength = Number(buildingLengthEl.value);
//   let buildingWidth = Number(buildingWidthEl.value);
//   let buildingHeight = Number(buildingHeightEl.value);
//   let backSideMember = Number(backSideMemberEl.value);
//   let frontSideMember = Number(frontSideMemberEl.value);
//   let rightSideMember = Number(rightSideMemberEl.value);
//   let leftSideMember = Number(leftSideMemberEl.value);
//   let tinWidth = Number(tinWidthEl.value);

//   // Calculating screws using a dynamic approach
//   const screwData = [
//     { name: "BSW", value: buildingLength, member: backSideMember },
//     { name: "FSW", value: buildingLength, member: frontSideMember },
//     { name: "REW", value: buildingWidth, member: rightSideMember },
//     { name: "LEW", value: buildingWidth, member: leftSideMember },
//   ];

//   let screws = screwData.map(({ name, value, member }) => ({
//     name,
//     qty: member ? value * (member + 2) : 0,
//   })).filter(screw => screw.qty > 0); // Remove screws with 0 quantity

//   // Calculating back and front side stitch screws
//   let bfsLapping = Math.ceil(buildingLength / tinWidth);
//   let bfStichScrew = Math.ceil(((buildingHeight * 12) / 20) * bfsLapping);

//   let stichScrews = ["BSW", "FSW"].map(name => ({
//     name,
//     qty: bfStichScrew,
//   }));

//   displayDetails(screws, stichScrews);
// }

// function displayDetails(screws, stichScrews) {
//   display.innerHTML = ""; // Clear previous results before displaying new ones

//   function render(text, name, qty) {
//     display.innerHTML += `
//       <table>
//         <tr>
//           <td>${name} ${text}</td>
//           <td>${qty} pcs.</td>
//         </tr>
//       </table>
//     `;
//   }

//   screws.forEach(({ name, qty }) => render("Self Driller Screw", name, qty));
//   stichScrews.forEach(({ name, qty }) => render("Self Stich Screw", name, qty));
// }
