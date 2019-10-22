import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { getLanguageList, lang } from '../../../services/lang';
import { setLanguage } from '../../../store/actions/languageActions';

const useStyles = makeStyles((theme) => ({
  activeMenuItem: {
    fontWeight: 'bold',
  }
}));

function LanguageSwitcher() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { langKey } = useSelector(state => state.languageReducer);
  const dispatch = useDispatch();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLanguage(lg) {
    dispatch(setLanguage(lg))
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        color="inherit"
        aria-owns={Boolean(anchorEl) ? "menu-appbar" : null}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {langKey.toUpperCase()}
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {getLanguageList().map(lg => (
          <MenuItem key={lg} onClick={() => handleLanguage(lg)} className={langKey === lg ? classes.activeMenuItem : null}>
            {lang(lg)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LanguageSwitcher;
