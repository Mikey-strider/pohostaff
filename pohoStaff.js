function modifyContent() {
    const poHoStaff = document.querySelector(".content");

    poHoStaff.innerHTML = `
      <h2>Meet our Staff</h2>
      <br>
      <br>
      <br>
       <ul class="staff">
          <li class="poho-staff"><h3>Scott Peterson</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Scott-e1776108002279-200x200.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Carlton Paul</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Carltonprofile-360x360.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Tracii Ross MORE!</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/TraciiProfile-541x360.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Max Hing</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Max-200x200.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Stefan Girault</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Stefan-200x200.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Jason Singh</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Jason-200x200.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Irvin Pacheco</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Irvin-360x360.jpg"></li>
          <br>
          <li class="poho-staff"><h3>Daniel Gonzalez</h3>
          <img class="staff-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/Daniel-360x360.jpg"></li>
       </ul>
      `


  const style = document.createElement("style");
      style.innerHTML = `
      @imports url('https://fonsts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      body{
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: center;
        min-height: 100vh;
      }

      .content {
        background-image: linear-gradient(to bottom right, #000000d6 30%, #000000c0 50%);
      }

      h2 {
        color: #ff0303;
      }

      h3 {
        color: #ff0303;
      }

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 30px 10px;
      }

      .staff-img {
        border: 2px solid red;
        height: 300px;
        width: 285px;
      }

    `
  document.head.appendChild(style);

};
window.addEventListener('DOMContentLoaded', modifyContent);
