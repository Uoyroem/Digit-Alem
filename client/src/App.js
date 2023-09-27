import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import styles from "./App.module.scss";


function App() {
    return (
        <div className={styles.app}>
            <div>
                <Header className={styles.header}/>
                <Main className={styles.main}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
