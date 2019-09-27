import React from 'react';

import PreviewField from './preview.jsx';
import SettingsField from './settings.jsx';

import Banner from '@components/banner.jsx';

require("./styles.styl");

class AppBanner extends Banner {
  constructor(props) {
    super(props);

    this.state = {
      hash: Math.round(Math.random() * 100000000).toString(),
      conditions: 'Будь как ребёнок, бегущий в распахнутые для объятия руки матери и узнаешь путь.',
      title: 'Это прекрасный заголовок!',
      description: 'Вдохновляющее описание',
      promocode: 'Радость',
      bg: '#E83841',
      color: '#ffffff'
    };
  }

  render() {
    return (
      <div className="bm-page">
        <PreviewField { ...this.state }/>
        <SettingsField
          {...this.state}
          handleChange={ this.handleChange.bind(this) }
          downloadClick={ this.showPopup.bind(this) } />
      </div>
    )
  }
}

export default AppBanner;
