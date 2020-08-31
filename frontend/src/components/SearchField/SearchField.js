import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  FormControl,
  OutlinedInput,
} from '@material-ui/core'
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchField({placeholder, handleFormForParent}) {
  const classes = useStyles();
  const [searchFieldText, setSearchFieldText] = useState('');

  const handleChange = (event) => {
    setSearchFieldText(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    handleFormForParent(searchFieldText);
  };

  return (
    <form onSubmit={handleForm}>
      <Paper className={classes.root}>
          <IconButton
            className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <InputBase
            onChange={handleChange}
            className={classes.input}
            placeholder={placeholder ? placeholder : 'Search'}
            inputProps={{ 'aria-label': 'Search' }}
          />
      </Paper>
    </form>
  );
}

SearchField.propTypes = {
  handleFormForParent: PropTypes.any.isRequired,
};


export default SearchField;


//
// <Paper className={classes.root}>
//   <FormControl className={(classes.textField)} variant="outlined">
//     <OutlinedInput
//       value={searchFieldText}
//       onChange={handleChange}
//       startAdornment={<SearchIcon/>}
//       inputProps={{
//         'aria-label': 'search',
//       }}
//       labelWidth={0}
//     />
//   </FormControl>
// </Paper>