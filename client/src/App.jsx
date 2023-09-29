import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <div className="app__content">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
