import React from "react";
import "./About.css";
import Before1 from "../photos/Before1.jpg";
import After1 from "../photos/After1.jpg";
import Before2 from "../photos/Before2.jpg";
import After2 from "../photos/After2.jpg";
import Before3 from "../photos/Before3.jpg";
import After3 from "../photos/After3.jpg";

export default function About() {
return (
<div className="about-wrapper">
<div className="about-container">
<h1 className="about-title">O nama</h1>


<p className="about-text">
Naš tim čine iskusni majstori i tehničari specijalizovani za
<strong> reparaciju, obnovu i precizno prepravljanje oštećenih površina i delova</strong>.
Bilo da je u pitanju drvo, metal, keramika, zid ili nameštaj –
naš cilj je uvek isti: vratiti oštećenoj površini izgled i funkcionalnost kao prvog dana.
</p>


<p className="about-text">
Sa iskustvom u radu sa različitim vrstama materijala,
razvili smo stručnost u:
</p>


<ul className="about-list">
<li>popravci i restauraciji oštećenih ivica i površina</li>
<li>reparaciji napuklih, izgrebanih ili udubljenih delova</li>
<li>obnovi dekorativnih elemenata i završnih obrada</li>
<li>profesionalnom bojenju, lakiranju i finiširanju</li>
<li>preciznom popravljanju tehničkih i elektronskih komponenti</li>
</ul>


<p className="about-text">
Naš pristup spaja ručni rad, savremenu tehnologiju i vrhunsku pažnju posvećenu detaljima.
Nakon detaljne procene oštećenja biramo najoptimalniju tehniku popravke kako bismo
obezbedili dugotrajan rezultat.
</p>


<p className="about-text">
Verujemo da svaka površina, svaki predmet i svaka komponenta mogu ponovo da zablistaju —
potrebno je samo iskustvo, znanje i pravi alat. Zato iza svakog projekta stojimo sa
ponosom i garantujemo da će završni rezultat izgledati kao potpuno nov.
</p>
 <div className="compare-section">
          <h2 className="compare-title">Pre i Posle</h2>

          <div className="compare-grid">
            <div className="compare-item">
              <span className="compare-label">Pre</span>
              <img src={Before1} alt="Pre" className="compare-image" />
            </div>

            <div className="compare-item">
              <span className="compare-label">Posle</span>
              <img src={After1} alt="Posle" className="compare-image" />
            </div>

            <div className="compare-item">
              <span className="compare-label">Pre</span>
              <img src={Before2} alt="Pre" className="compare-image" />
            </div>

            <div className="compare-item">
              <span className="compare-label">Posle</span>
              <img src={After2} alt="Posle" className="compare-image" />
            </div>
            
            <div className="compare-item">
              <span className="compare-label">Pre</span>
              <img src={Before3} alt="Pre" className="compare-image" />
            </div>

            <div className="compare-item">
              <span className="compare-label">Posle</span>
              <img src={After3} alt="Posle" className="compare-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}