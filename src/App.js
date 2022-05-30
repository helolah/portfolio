import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

import React, { useState } from "react";

function App() {

    return (
            <div className="App">
                <header>
                    <Header />
                </header>
                <main>
                    <Main />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }

export default App;
