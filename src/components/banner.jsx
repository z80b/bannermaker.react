import React from 'react';

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }
    
    handleChange(event) {
        event.persist && event.persist();

        this.setState((state) => {
            state[event.target.name] = event.target.value;
        })
    }

    markupReady(el) {
        if (el) this.html = el.innerHTML.replace('&quot;', '\'');
    }

    showPopup() {
        this.setState(state => { return { ...state, markup_popup: true }})
    }

    closePopup() {
        this.setState((state) => { return { ...state, markup_popup: false }})
    }
    
    setTemplateValues(template, values = {}) {
        let result = template;
        for (let key in values) {
            let rx = new RegExp(`\\$${key}`, 'g');
            result = result.replace(rx, values[key]);
        }
        return result;
    }
}

export default Banner;