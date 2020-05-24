import React from 'react';
import { WOW } from 'wowjs';

import './App.css';
import Header from './Components/Header/Header';
import FirstPage from './Components/Pages/FirstPage/FirstPage';
import SecondPage from './Components/Pages/SecondPage/SecondPage';
import ThirdPage from './Components/Pages/ThirdPage/ThirdPage';
import ForthPage from './Components/Pages/ForthPage/ForthPage';
import FifthPage from './Components/Pages/FifthPage/FifthPage';
import SixthPage from './Components/Pages/SixthPage/SixthPage';
import SeventhPage from './Components/Pages/SeventhPage/SeventhPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 1,
      latitude: 0,
      longitude: 0,
    };
  };

  updateData = (value) => {
    this.setState({ idx: value });
  };

  updateLatitude = (value) => {
    this.setState({ latitude: value });
  };

  updateLongitude = (value) => {
    this.setState({ longitude: value });
  };

  componentDidMount(){
    const wow = new WOW ({
      offset: 150,
      mobile: false,
      live: true,
    });

    wow.init();
  };

  render() {
    const { 
      navIcons,
      links,
      shores,
      pageTitles,
      headlines,
      beachList,
      shop,
      footerText,
    } = this.props;

    const { 
      idx,
      latitude,
      longitude,
     } = this.state;

    const headerProps = {
      navIcons: navIcons, 
      links: links,
      updateLatitude: this.updateLatitude,
      updateLongitude: this.updateLongitude,
    };

    const firstPageProps = {
      navIcons: navIcons, 
      shores: shores, 
      pageTitle: pageTitles[0],
    };

    const secondPageProps = {
      navIcons: navIcons,
      pageTitle: pageTitles[1], 
      headline: headlines[0],
      beachList: beachList, 
      updateData: this.updateData, 
      idx: idx,
      latitude: latitude,
      longitude: longitude,
    };

    const thirdPageProps = {
      beachList: beachList, 
      updateData: this.updateData, 
      idx: idx,
      links: links, 
    };

    const forthPage = {
      navIcons: navIcons,
      headlines: headlines,
      updateData: this.updateData, 
      beachList: beachList,
      pageTitle: pageTitles[2],
      idx: idx,
      links: links,
    };

    const fifthPageProps = {
      navIcons: navIcons,
      headlines: headlines,
      updateData: this.updateData, 
      beachList: beachList,
      pageTitle: pageTitles[3],
      idx: idx,
      links: links,
    };

    const sixthPageProps = {
      navIcons: navIcons, 
      shop: shop,
      pageTitles: pageTitles,
      headline: headlines[5],
      links: links,
    };

    const seventhPageProps = {
      links: links, 
      footerText: footerText,
    };

    return (
      <div className="app">
        <Header { ...headerProps } />
        <main className="main">
          <FirstPage { ...firstPageProps } />
          <SecondPage { ...secondPageProps } />
          <ThirdPage { ...thirdPageProps } />
          <ForthPage { ...forthPage } />
          <FifthPage { ...fifthPageProps } />
          <SixthPage { ...sixthPageProps } />
        </main>
        <footer>
          <SeventhPage { ...seventhPageProps } />
        </footer>
      </div>
    );
  };
};

export default App;