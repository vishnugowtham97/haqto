import React from "react";
import "./FooterContact.css";
const FooterContact = () => {
  return (
    <div className="footerContact">
      <div>
        <h2>follow us</h2>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAiRJREFUWEftlz9I1VEUxz/PzNKCkkRIUBCCIKRJwsGGpkCFXARRUTBadIlcREoHcVQcI2qIEgcFB0GaXbO5RSNaUhdr0ArSul/4/eTx415+976fPB7yu8vjcc+fzzvn3HPOK1Bhp1BhPORAaRnJI3TuInQRaAKuRL/sGtAA1KT90uj+CNgHfkXffwK7wLFL31ZDl4E+4CFQ5ek4ROwE+AKsAx+TijagSeBuiIcMshvA+2L9JNAd4HkGB6WoTgPbsWISaAjoKsVqBh2lbtkFNAW0ZTBeiuonYN4FpIubAVYV6lsB8jZRFfhpmSRT9gq46ungn8m9UtwJ9AP1nnpJMbWFp64IqeJ9n7qABiNDl4BHQA9QHQj2w/SqMRuQmuDbAGPFQLGamuYA0BFg5xB4YgOqBd4EGLIBxepqHyPGXrOHvd/AqA3oAvDOw0Asoo6rGrKd25ETH6C/pnMP24BU4EsZgZQyQd4LsKM599hV1IqQIuVziiOkou41s6m7hKI+AMZdQK+BOh+aaGIr1PejZ3/dUy8p9h2YcAEtAo2ehlXUX83LbPWUd4l9NlmZdQHNmLmigizn2QReuoDUDx6UkwZYAdZcQO3AszIDvQB2XEB6YXNAS5mgtoCFYl+2jVGvTHNJa4i6qIr8xhkDaqf+YHysAn/SgGy+NVbiRV332ggEqlVFn2kDWU73AM0twXxL2Dv1mf9RTEt9HqE8QmkRSLuvuBr6D5CHTSV9QNw+AAAAAElFTkSuQmCC" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAUZJREFUWEft2D0vBUEUxvHf1ShEIYIodHoRKr6A3jeQUKkoJL6BwktCr9GqlHqVSPQKlUokEgoa7sglm7FrretONrk7yTSz8/LfM885c2ZaalZaNePRAJXtSJGFZjBdNrjL7ze4jufIA5rHRpeL/Xb4Hi6znfOAlhFqinKKUL9K3wC94Ap3mZ8fwyyGM21JLHSLHTzm7Pkm5lIC3WMbTwUCTA70zWsisKRAb1hB0M9nGUSIaVOdhgVMptqyZ6yWWCTeyZ6KOuhmLVpxHxM/BLTkQAcY72ugY5xXOGMOMdpLUVcBGmhnECcR/L9rqApQcPfdOgGFeLTVa6Ds/Hlu33hZY6EKIeYj5YiPjkZDjYZqoaGQ1a1XIen0/Yuoj3CRXSvvXhbSzkWMVIR6bd8ozqIxSxgqmOehA5NNeZvXj1KjN+9DZSZ6B7DabSWiJEHJAAAAAElFTkSuQmCC" />{" "}
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAm1JREFUWEft10uojVEUwPHfRYkokTwmCIWBJJHHQJIkQshrRhkQSiYGMsGARIkBZaJMKBEzhZEBYmTCRJI8orwKeZxV++h0fPd8+7v3nNzB3XU6X+dbe63/Xmvttdbp0sdWVx/j0Q9UFpF+D/0PD43FckzFeLzAM9xOz3WmgQjZl42QRSEbhum4X3aagvdrsA5hrGidSVAzsAzH8aoMaAW24CQeVoBahJ0V5K/hCobgc31fkYf2Yh5+4QQeZRgZng4wNEM2RJ7gC0biML61AtqP2UngN26mk3xvYWw+dmfC1MU+4hBel4VsNTY2KX+Hi3hQUxKQzStCvLICUEAcxdvmPUUhi4Q+2I3yD7ibPo0n24HFFYAu4UaRfBFQ/BZ5NLfEQLj8TXL5GEypAHQ+lYF/thQBzUx1Yx/ienZiHcPjXA+Fd+Yg8iZO3ol1AM9zgTbX6s+qTlAknXHFt6eykhWyCekGdKrxRgeIolu4ujO6AWs75KVztRt5pypQyC/B1lTa28X2tVZ7djVW5pw6VJeZlZpkVOEFbSK6isutdLXKk0k40iaQUBPJvAefegoU+7ZhaZugTuNema6ymxTvI49iJOnNuoULOQrKgOo6JmMhJmJajuIGmRhfTuFHzr5coAEpdOsRE2XuihCdrTXrn7kbWgHFGDoKUSg3YVyu0jSixEQYN6poXOlWVTNQXPVoG6MTTK4HGw1ED4wEflrhAH9FiwyGJ2JIizF2cAWl8e8i2sJ1tJouW6ps5YFBafyIOSeSOrw2IkGGF2JAi+/o2pG47yvAZ4esHTp7paMnOdIrg2Wb+4H6PVTmgbL3fwD4Fl8l7hoHEQAAAABJRU5ErkJggg==" />{" "}
      </div>
      <div className="booking">
        <h2>Book Tickets faster. Download our mobile Apps</h2>
        <div>
          <img
            className="youtube"
            src="https://www.shutterstock.com/image-vector/ukraine-kropyvnytskyi-april-26-2023-260nw-2293917457.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdscMhsD7BHb-C7ZEuk-Ky2OlAOIy2PSa4w&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default FooterContact;
