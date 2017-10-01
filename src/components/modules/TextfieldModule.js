import React from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

export default class TextFieldModule extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    componentDidMount() {
        this.setState({
            value: this.props.value,
        });
    }


    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });

        if (this.props.onChange != null) {
            this.props.onChange(event)
        }
    };
    
    render() {
        return (
            <div className='center-align'>
                <span>{this.props.lableName} : </span>
                <TextField
                    hintText={this.props.hintText}
                    errorText={this.props.errorText}
                    value={this.state.value}
                    style={{ paddingLeft: '24px' }}
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

TextFieldModule.propTypes = {
    labelName: PropTypes.string,
    errorText: PropTypes.string,
    hintText: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

TextFieldModule.defaultProps = {
    disabled: false
}