import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';

class FormInput extends React.Component {
    componentWillMount = () => {
    }

    render() {
      return (
        <FormControl style={{ width: '95%' }}>
          <InputLabel>
            {this.props.label}
          </InputLabel>
          <Input
            value={this.props.value}
            onChange={this.props.handle}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton color="primary" onClick={this.props.save}>
                  <AddIcon style={{ color: '#009900' }} />
                </IconButton>
              </InputAdornment>
)}
          />
        </FormControl>
      );
    }
}

export default FormInput
