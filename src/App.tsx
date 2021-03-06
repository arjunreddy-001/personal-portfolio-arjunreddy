import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";
import Spinner from "./components/spinner/Spinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/home" exact>
              <Redirect to="/" />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
