import React from 'react';

class Fieldset extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.className
            ? ' ' + this.props.className
            : ''

        return (
            <fieldset className={ `b-form__fieldset b-fieldset${ className }` }>
                <div className="b-fieldset__title">
                    { this.props.title }
                    { this.props.onClick && (
                        <button
                            onClick={ this.props.onClick }
                            className="b-fieldset__button b-fieldset__button--add">+</button>
                    )}
                </div>
                <div className="b-fieldset__body">{ this.props.children }</div>
            </fieldset>
        );
    }
}

Fieldset.defaultProps = {
    className: '',
    title: ''   
}

export default Fieldset;