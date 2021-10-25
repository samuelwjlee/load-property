import ReactDOM from "react-dom";
import { Suspense } from "react";
import { createUseStyles } from "react-jss";
import fetchPropertyData from "./mockApi";
import PropertyCard from "./PropertyCard";
import Loading from "./Loading";

const resource = fetchPropertyData();

const usePropertyCardsStyles = createUseStyles({
  propertyCards: {
    padding: "30px 20px",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }
});

function PropertyCards() {
  const classes = usePropertyCardsStyles();
  let properties = resource.read();

  return properties ? (
    <div className={classes.propertyCards}>
      {properties.map((property) => (
        <PropertyCard
          key={property.address.streetAddress}
          propertyDetails={property}
        />
      ))}
    </div>
  ) : null;
}

const useAppStyles = createUseStyles({
  app: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  header: {
    textAlign: "center",
    margin: "30px 0 0 0"
  },
  reloadButton: {
    fontWeight: "bold",
    fontSize: 20,
    position: "fixed",
    height: 50,
    width: 150,
    bottom: 30,
    "&:hover": {
      cursor: "pointer"
    }
  }
});

function App() {
  const classes = useAppStyles();
  function reload() {
    if (window) {
      window.location.reload();
    }
  }
  return (
    <div className={classes.app}>
      <div>
        <h1 className={classes.header}>Load 1</h1>
        <Suspense fallback={<Loading type={1} />}>
          <PropertyCards />
        </Suspense>
      </div>
      <div>
        <h1 className={classes.header}>Load 2</h1>
        <Suspense fallback={<Loading type={2} />}>
          <PropertyCards />
        </Suspense>
      </div>
      <button className={classes.reloadButton} onClick={reload}>
        Reload
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
