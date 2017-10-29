import React from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

import _ from 'lodash'

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
            <div className='center-align' style={this.props.style}>
                <span>{this.props.lableName} : </span>
                <TextField
                    hintText={this.props.hintText}
                    errorText={this.props.errorText}
                    value={this.state.value}
                    value={_.isNil(this.state.value) ? '' : this.state.value}
                    style={Object.assign({ paddingLeft: '24px' })}
                    type={this.props.type}
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
    onChange: PropTypes.func,
    style: PropTypes.object,
    type: PropTypes.string
}

TextFieldModule.defaultProps = {
    disabled: false
}