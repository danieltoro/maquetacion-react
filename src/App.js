import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Pages
import Home from './pages/home';
import Hotel from './pages/hotel';
import Hotels from './pages/hotels';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {/*<Home />*/}
                <Hotel />
                {/*<Hotels />*/}
                <Footer />
            </div>
        );
    }
}

export default App;
