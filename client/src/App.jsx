import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.scss";


function App() {
    return (
        <div className="app">
            <div className="app__content">
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
