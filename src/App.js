import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Form />
        <Table />
        <Footer />
      </div>
    );
  }
}

export default App;
