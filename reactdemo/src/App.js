import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';
import NavBarComponent from './Component/NavBarComponent';
import ContentComponent from './Component/ContentComponent';



class App extends Component {
  
  constructor(){
    super();
    this.state = {selected: 0}

  }

  handleSelect(id){
    this.setState({selected: id});
  }

  getExperience(){
    this.setState({experience: [
      {
        id:uuid.v4(),
        institute: 'University of Toronto Scarborough',
        title: 'Honours Bachelor of Science',
        duration: 'September 2012 – June 2016',
        bulletpts: [
          'Computer Science Specialist Program – Software Engineering Stream, notable courses includes: Introduction to machine learning, Introduction to artificial intelligence, Web Development;',
          'Cumulative GPA of 3.65 out of 4.0;',
          '1st, 3rd and 4th year Dean’s List'
        ]        
      },      
      {
        id:uuid.v4(),
        institute: '',
        title: '',
        duration: '',
        bulletpts: [
          'Extensive experience with programming languages: 4 years of experience in Python, 3 years of experience in Java and C, also experienced in Haskell, SQL, Matlab, Objective-C;',
          'Hands-on experience in all stages of Web Development process, proficient with JavaScript, Node.js, Ajax, Angular4, HTML5, JQuery, NoSQL databases and frequently adapting to new concepts such as AWS and GWT;',
          'Advanced knowledge of IDEs: PyCharm, WebStorm, Eclipse, Visual Studio and Xcode;',
          'Rich understanding various concepts: Object-Oriented Programming, Agile, Test Driven Development, RESTful APIs, Version Control System and Continuous Integration;',
          'Strong logical thinking, deep understanding of advanced algorithm designs ranging from greedy algorithms to dynamic programming'
        ]        
      },
      {
        id:uuid.v4(),
        institute: 'CaseWare International Inc',
        title: 'Test Developer',
        duration: 'May - Dec 2014',
        bulletpts: [
          'Maintained and executed existing test automation suites and analyzed automated test results to identify possible code flaws that result in bugs;',
          'Developed multiple GUI tests suites under a Java + SilkTest environment;',
          'Developed solid understanding of algorithms and methodologies during the process of developing and deploying new tests;',
          'Effectively scheduled time to meet multiple deadlines and expectations;',
          'Further knowledge of version control system and work flow management acquired through daily GIT usage.'
        ]
      },
      {
        id:uuid.v4(),
        institute: 'Suzhou Institute of Biomedical Engineering',
        title: 'Data Analyst',
        duration: 'Mar - August 2017',
        bulletpts: [
          'Responsible in modelling the status of perfusion tubes in Matlab and developing algorithms to predict new status given real-time data;',
          'Received feedback for being a quick learner and demonstrated strong initiative at work;',
          'Further solidified understanding of modern machine learning algorithms including SVM and PCA;',
          'Optimized the algorithm and significantly lowered the classification error rate;',
          'Put models through multiple test scenarios and received desired result;'
        ]        
      }
    ]})
  }

  componentWillMount(){
    this.getExperience();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Owen Wangs's Resume</h1>
        </header>

        <NavBarComponent setSelected={this.handleSelect.bind(this)} />

        <ContentComponent data={this.state.experience[this.state.selected]} />
      </div>

    );
  }
}

export default App;
