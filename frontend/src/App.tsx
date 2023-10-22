import { ThemeProvider, createGlobalStyle } from "styled-components";
import { MetricPage } from "./page/metric/MetricPage";

const theme = {
  main: "mediumseagreen",
};

const GlobalStyles = createGlobalStyle`

  *  {
    box-sizing: border-box;
  }

  body {    
    background: #ffffff;    
    color: #010605;    
    margin: 0;
    padding: 0;    
  }

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MetricPage />
    </ThemeProvider>
  );
}

export default App;
