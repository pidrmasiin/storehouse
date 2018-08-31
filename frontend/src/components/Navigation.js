import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends React.Component {
    state = {
      anchorEl: null,
    };

    componentDidMount = () => {
    }

      handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const linkStyle = { color: 'white', paddingLeft: '42%' }
        return (
          <div>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon style={{ color: 'white', background: '#1a001a' }} />
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
                  border: '1em',
                  borderColor: 'white',
                  textAlign: 'center',
                },
              }}
            >
              <MenuItem onClick={this.handleClose}>
                <Link style={linkStyle} to="/"> Etusivu</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link style={linkStyle} to="/varastosi">Varastosi</Link>
              </MenuItem>
            </Menu>
          </div>
        );
      }
}


export default NavBar;
