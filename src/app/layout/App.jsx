import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import "./styles.css";
import { EventDetailedPage } from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";

function App() {
  // const title = React.createElement('h1', {}, 'Revents no JSX')
  // const div = React.createElement('div', {className: 'App'}, title);

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar/>
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path={["/createEvent", "/manage/:id"]}component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
    // div
  );
}

export default App;
