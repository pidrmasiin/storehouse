import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends React.Component {
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
        <div>
        <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : null}
        aria-haspopup="true"
        onClick={this.handleClick}
        >
        <MenuIcon style={{ color: 'white'}}/>
        </IconButton>
        <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={this.handleClose}
        PaperProps={{
          style: {
            width: '100%',
            background: '#3b1226',
            border:'1em',
            borderColor:'white',
            textAlign:'center'
          },
        }}
      >
          <MenuItem onClick={this.handleClose}>
            <p style={{color:'white', padding:'42%'}}>Etusivu</p>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <p style={{color:'white', padding:'42%'}}>Varasto</p>
          </MenuItem>
      </Menu>
      </div>
    )
}

}


export default NavBar