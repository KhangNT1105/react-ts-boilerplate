import React from 'react';
import './Header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Container, Grid, IconButton, InputBase } from '@material-ui/core';
import logo from '../../assets/image/header/logo.png';
const Header: React.FC = () => {
    return <header className="header">
        {/* <Container maxWidth="xl"> */}
            <Grid container={true} alignItems="center"
                >
                <Grid item xs={4} lg={2} >
                    <div className="header__left">
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="logo" />
                    </div>
                </Grid>
                <Grid item xs={6} lg={7}>
                    <div className="header__middle">
                        <div className="searchBar">
                            <div className="searchBar__icon">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                className="searchBarInput"
                            // inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton className="iconButton-arrowDown">
                                <ArrowDropDownIcon />

                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} >
                    <div className="header__right"></div>

                </Grid>

            </Grid>


        {/* </Container> */}
    </header>;
}
export default Header;