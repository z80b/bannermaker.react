import React from 'react';

class TextArea extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className={ `b-form__field b-field b-field--${ this.props.name }` }>
				<label className="b-field__label">{ this.props.label }</label>
				<textarea
					ref={ this.props.name }
					className="b-field__textarea"
					name={ this.props.name }
					disabled={ this.props.disabled }
					onChange={ this.props.onChange }
					onBlur={ this.props.onBlur }
					value={ this.props.defaultValue }
					placeholder={ this.props.placeholder }>{ this.props.defaultValue }</textarea>
			</div>
	)}
}

export default TextArea;