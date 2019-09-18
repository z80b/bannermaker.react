import React from 'react';
//import data from './banner-list.json';
const data = {
  "banners": [
    {
      "name": "Выберите баннер",
      "id": ""
    },
    {
      "name": "Best Action",
      "id": "best-action"
    }
  ]
};

function createBannersList() {
  let banners = [...data.banners];
  return banners.sort((a, b) => {
    if (a.id == '') return -1;
    if (b.name[0] == '*') return -1;
    if (a.name[0] == '*') return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
}

const bannersList = createBannersList();


export const GetBannerName = (value) => {
  if (value.value !== '') {
    var Banner = require(`./banners/${value.value}.jsx`).default;
    return (<Banner />)
  }
  else {
    return null;
  }
};

class BannerSelectForm extends React.Component {

  constructor(props) {
    super(props);
    let path = window.location.pathname
    path = path[0] == '/' ? path.substr(1) : path
    this.state = {
      value: path
    };
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState({ value: value });
    this.props.onSelect(value);
  }

  render() {
    return (
      <form>
        <select name="banners" className="banner-selector" value={this.state.value}
          onChange={this.handleChange.bind(this)}>
          {
            bannersList.map((banner, val) => {
              return <option value={banner.id} key={val}>{banner.name}</option>
            })
          }
        </select>
      </form>
    );
  }
}

export default BannerSelectForm;