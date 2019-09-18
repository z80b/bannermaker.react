import React from 'react';

class AppBanner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hash: Math.round(Math.random() * 100000000).toString(),
            conditions: 'Будь как ребёнок, бегущий в распахнутые для объятия руки матери и узнаешь путь.',
            title: 'Это прекрасный заголовок!',
            description: 'Вдохновляющее описание',
            promocode: 'Радость',
            bg: '#E83841',
            color: '#ffffff'
        }
    }

    render() {
        return (
        <div className="bm-page">
        </div>
    )}
}

export default AppBanner
