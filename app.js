import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import {Content} from './content'; // Assuming Content is a default export
import {Footer} from './footer'; // Assuming Footer is a default export

function App() {
  return (
    <div className="box">
      <Header />
      <Content />
      <Footer name="welcome" /> {/* Moved out of the card div for clarity */}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
