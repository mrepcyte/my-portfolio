import React from "react";
import Header from "./components/header";
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import { GlobalStyle, PageContainer } from "./styles";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <PageContainer>
                <Introduction />
                <Projects />
            </PageContainer>
        </div>
    );
};

export default App;