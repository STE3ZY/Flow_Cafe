import "./Cards.css";
import { Slide } from "react-awesome-reveal";

const Cards = () => {
  return (
    <ul className="cards__container">
      <Slide triggerOnce>
        <li className="card1 card">
          <h2 className="card__title">
            <i className="bx bxs-coffee-bean symbol"></i>Ipanema Espresso
            <i className="bx bxs-coffee-bean symbol"></i>
          </h2>
          <p className="card__text">
            Η αδιαμφισβήτητη ανωτερότητα των γευστικών και αρωματικών του
            χαρακτηριστικών, η χαμηλή περιεκτικότητα σε καφεΐνη και οι ιδιαίτερα
            απαιτητικές συνθήκες καλλιέργειας, έχουν φέρει τον Arabica στην
            κορυφή των προτιμήσεων καφέ. Ένας από τους 4 καλύτερους Specialty
            Coffees και ένας από τους 10 καλύτερους καφέδες παγκοσμίως.
          </p>
        </li>
        <li className="card2 card">
          <h2 className="card__title">
            <i className="bx bxs-pizza symbol"></i>Χειροποίητες Πίτες
            <i className="bx bxs-pizza symbol"></i>
          </h2>
          <p className="card__text">
            Η πιο φρέσκια άφιξη που γεμίζει την πόλη με αρώματα και γεύσεις.
            Ξεκίνα το πρωινό σου με μια σπιτική πίτα ή μπαγκέτα και συνόδευσε
            τον καφέ σου με ένα σνακ ή γλυκό των πολλών επιλογών μας.
          </p>
        </li>
        <li className="card4 card">
          <h2 className="card__title">
            <i className="bx bx-baguette symbol"></i>Κρύα Σάντουιτς
            <i className="bx bx-baguette symbol"></i>
          </h2>
          <p className="card__text">
            Απολαύστε καθημερινά μια μεγάλη ποικιλία από χορταστικά κρύα
            σάντουιτς σε παραδοσιακές και πρωτότυπες γεύσεις
          </p>
        </li>
        <li className="card3 card">
          <h2 className="card__title">
            <i className="bx bx-cookie symbol"></i>Χειροποίητα Γλυκά
            <i className="bx bx-cookie symbol"></i>
          </h2>
          <p className="card__text">
            Το Flow cafe διαθέτει ποικιλία χειροποίητων γλυκών, φτιαγμένα με
            αγνά υλικά στο εργαστήριό μας. Απολαύστε τον καφέ σας σε συνδυασμό
            με ένα από αυτά όπως Σοκολατόπιτα, Cheesecake Φυστικοβούτυρο,
            Μιλφέιγ και Σπάτουλα.
          </p>
        </li>
      </Slide>
    </ul>
  );
};

export default Cards;
