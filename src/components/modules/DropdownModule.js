import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types'

const styles = {
  customWidth: {
    width: 200,
  },
};

const underlineStyle = {}
const underlineErrorStyle = {
  borderTop: '2px solid #f44438'
}

export default class DropDownModule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => {
    this.setState({ value });
    if (this.props.onChange != null) {
      this.props.onChange(event, index, value)
    }
  }

  render() {
    return (
      <div className='center-align'>
        <span>{this.props.lableName} : </span>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
          underlineStyle={(this.props.errorText) ? underlineErrorStyle : underlineStyle}
        >
          {this.props.data.map((row, index) => (
            <MenuItem value={row.id} primaryText={row.name} key={row.id} />
          ))}
        </DropDownMenu>
        <div style={{ paddingLeft: '24px', color: '#f44438', fontSize: '12px' }}>{this.props.errorText}</div>
      </div>
    );
  }
}

DropDownModule.propTypes = {
  lableName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func
}