function loadContent(page) {
  let content = "";

  switch (page) {
    case "home":
      content = `
              <div class="jumbotron">
                  <img src="img/Logotip.png" alt="Logo">
                  <h1 class="display-4 mt-3">Benvinguts a Els Peluts d'Olorda!</h1>
                  <p class="lead">Residència canina ubicada a Santa Creu d'Olorda, Vallvidrera, Barcelona. Ens caracteritzem per tenir els gossos vivint en el recinte de la casa, tant en les parts interiors com exteriors. La casa té 400m² i el terreny és de 600m². Els nostres peluts reben cuidats familiars i estem molt implicats en que el seu pas per la residència sigui com unes vacances per ells.</p>
              </div>`;
      break;
    case "services":
      content = `
              <div>
                  <h2>Serveis</h2>
                  <div class="grid-container">
                      <div class="grid-item1">
                          <h3>Guarderia Diürna</h3>
                          <img src="img/beagle.jpg" alt="Beagle" class="img-fluid">
                          <p>Servei de guarderia durant el dia amb activitats i jocs. Ens assegurem que els vostres peluts gaudeixin d'un dia ple de diversió i atenció.</p>
                      </div>
                      <div class="grid-item1">
                          <h3>Residència</h3>
                          <img src="img/labrador.jpg" alt="Labrador" class="img-fluid">
                          <p>Allotjament per a estades curtes o llargues amb totes les comoditats. Els vostres gossos es sentiran com a casa amb el nostre ambient acollidor.</p>
                      </div>
                      <div class="grid-item2">
                          <h3>Entrenament</h3>
                          <img src="img/out1.jpg" alt="Entrenament" class="img-fluid">
                          <p>Sessions d'entrenament personalitzat per a cada gos. Oferim tècniques d'entrenament adaptades a les necessitats individuals dels vostres peluts.</p>
                      </div>
                      <div class="grid-item2">
                          <h3>Passejos</h3>
                          <img src="img/out2.jpg" alt="Passejos" class="img-fluid">
                          <p>Passejos diaris en un entorn natural i segur. Els nostres passejos estan dissenyats per proporcionar exercici i estimulació mental als gossos.</p>
                      </div>
                  </div>
              </div>`;
      break;
    case "reservations":
      content = `
              <div>
                  <h2>Reserves</h2>
                  <form action="https://formspree.io/f/xzzppvza" method="POST">
                      <div class="form-group">
                          <label for="email">Your email:</label>
                          <input type="email" class="form-control" id="email" name="email" required>
                      </div>
                      <div class="form-group">
                          <label for="message">Your message:</label>
                          <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Send</button>
                  </form>
                  <div class="video-container">
                      <video src="img/dog1.mp4" autoplay loop muted></video>
                      <video src="img/dog2.mp4" autoplay loop muted></video>
                  </div>
              </div>`;
      break;
    case "contact":
      content = `
              <div class="card-contact">
                  <h2>Contacte</h2>
                  <p>Adreça: Santa Creu d'Olorda, Vallvidrera, Barcelona</p>
                  <p>Telèfon: 622 495 171</p>
                  <p>Email: elspelutsdolorda@gmail.com</p>
                  <img src="img/Logotip.png" alt="Contacte" class="img-fluid" style="max-width: 33%; margin: 0 auto;">
                  <p>Si teniu qualsevol pregunta o voleu fer una reserva, no dubteu en contactar-nos. Estarem encantats d'atendre-us i oferir-vos tota la informació necessària.</p>
              </div>`;
      break;
    default:
      content = "<h2>Pàgina no trobada</h2>";
  }

  document.getElementById("content").innerHTML = content;
}

// Carregar la pàgina d'inici per defecte
document.addEventListener("DOMContentLoaded", () => loadContent("home"));
