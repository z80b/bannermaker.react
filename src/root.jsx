import React from 'react'
import BannerSelectForm, { GetBannerName } from './banner-list.jsx'
// import { browserHistory } from 'react-router-dom'


export default class Root extends React.Component {

  constructor(props) {
    super(props);
    let path = window.location.pathname
    path = path[0] == '/' ? path.substr(1) : path

    this.state = {
      bannerId: path
    };
  }

  onBannerSelected(bannerId) {

    this.setState({
      bannerId: bannerId
    });

    //browserHistory.push(bannerId);

  }

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-container__inner j-banner-chooser">
            <h2 className="logo-title">
              <a className="logo-title__link" href="/">Bannermaker</a>
              <sup className="j-set-bg">react</sup>
            </h2>
            <div className="banner-chooser">
              <BannerSelectForm onSelect={this.onBannerSelected.bind(this)} />
            </div>
            <a className="plain-chooser" href="/plain/">Plain</a>
          </div>
        </div>
        <div className="main-container">
          <GetBannerName value={this.state.bannerId} />
        </div>
      </div>
    )
  }
}