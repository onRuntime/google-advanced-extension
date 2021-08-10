import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Layout/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchProvider } from "./context/Search";
import Home from "./screens/Home";
import themes from "./services/themes";
import Search from "./screens/Search";
import * as ROUTES from "./constants/routes";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <SearchProvider>
        <Router>
          <Switch>
            <Wrapper>
              <Route path={ROUTES.SEARCH} component={Search} />
              <Route path={ROUTES.HOME} component={Home} exact />
            </Wrapper>
          </Switch>
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
