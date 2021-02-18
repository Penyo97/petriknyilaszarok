import React from "react";
import "./About.css";
import info from "../icons/information.svg";

const About = () => {
  return (
    <div className="About__Container">
      <div className="About__Text" id="about">
        <h1>Rólunk</h1>
        <br />
        <h3>
          Cégünk gyártási profilja, faablakok, erkélyajtók, bejárati ajtók,
          faszerkezetű lépcsők, beltéri ajtók, télikertek nagy méretű üvegfalak,
          emelő-toló, bukó-toló vagy harmonika toló ajtók széles választéka.
        </h3>
        <h3>
          Amelyeket standard és különböző ívelt formákban és méretben,
          vásárlóink egyedi igényei szerint készítünk. Ügyfeleinknek ezenkívül
          szakszerű beépítést, ingyenes felmérést és házhoz szállítást
          biztosítunk.
        </h3>
        <h3>
          Az ingyenes szaktanácsadás és árajánlat-készítés mellett a garanciális
          és garancián túli szervizt is biztosítjuk.
        </h3>
        <h3>
          Cégünk előnye a nagy gyártókkal szemben a rendkívül rugalmas
          kiszolgálás és a szoros kapcsolat tartás vevőinkkel.
        </h3>
        <h3>
          Szakembereink több, mint 25 éves gyakorlattal és németországi szakmai
          tapasztalattal rendelkeznek.
        </h3>
      </div>
      <div>
        <img src={info} alt="inf" className="About__Img" />
      </div>
    </div>
  );
};

export default About;
