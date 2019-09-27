import React from 'react';

class SingleInput extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className={ `b-form__field b-field b-field--${ this.props.name }` }>
                <label className="b-field__label">{ this.props.label }</label>
                <input
                    ref={ this.props.name }
                    className="b-field__input"
                    name={ this.props.name }
                    type={ this.props.type }
                    defaultValue={ this.props.defaultValue }
                    disabled={ this.props.disabled }
                    onChange={ this.props.onChange }
                    placeholder={ this.props.placeholder }/>
                { this.props.description && (
                    <span className="b-field__description">{ this.props.description }</span>
                )}
            </div>
    )}
}

export default SingleInput;