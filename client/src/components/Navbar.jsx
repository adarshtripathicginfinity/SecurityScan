import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #383838;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #ffffff;
  font-size: 24px;
  margin-left: 25px;
`


const Navbar = ({ open, handleDrawer }) => {
  const logo = 'https://help.apple.com/assets/61527314E4621F1E6B182A5D/61527315E4621F1E6B182A64/en_GB/c34b1b0e87e731a83161d9bb21345afc.png';
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 40}} />
        <Heading>Security Scan</Heading>
      </Toolbar>
    </Header>
  )
}

export default Navbar