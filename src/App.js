import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  pagesize=15;
  render() {
    return (
      <div>
       <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key ="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route exact path="/business" element={<News key ="business" pagesize={this.pagesize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News key ="entertausment" pagesize={this.pagesize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News key ="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route exact path="/health" element={<News key ="health" pagesize={this.pagesize} country="us" category="health" />} />
          <Route exact path="/science" element={<News key ="science" pagesize={this.pagesize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News key ="sports" pagesize={this.pagesize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News key ="technology" pagesize={this.pagesize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
    </div>
    )
  }
}

export default App
