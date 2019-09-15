import { Menu, MenuItem, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../store/actions/languageActions';
import lang, { getLanguageList } from "../../../services/lang";

function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.languageReducer);
  const languages = getLanguageList();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLanguage(data) {
    dispatch(setLanguage(data))
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
        {language.toUpperCase()}
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map(lg => (
          <MenuItem key={lg} onClick={() => handleLanguage(lg)}>
            {language === lg ? "-" : ""} {lang(lg).toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LanguageSwitcher;
