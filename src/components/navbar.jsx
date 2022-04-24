import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { auth } from './Firebase/firebase';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { db } from './Firebase/firebase';
import { addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { collection } from 'firebase/firestore';


const ResponsiveAppBar = () => {


  let history = useHistory();
  const user = auth.currentUser
  const name = auth.currentUser
  const [open, setOpen] = React.useState(false);

  const [enterdate, setEnterDate] = useState("");
  const [title, setTitle] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEvent = ()=>{
    const event = {
      title: title,
      start: new Date(enterdate),
      allDay: true,
      owner: user.uid
    }
    addDoc(collection(db, `events+${user.uid}`), event)
  }
  const values = {
    someDate: new Date().toISOString().substring(0, 10)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#92A9BD" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CalendarMonthIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {name.displayName}
          </Typography>
          <Button variant="text"  color="inherit" onClick={handleClickOpen}>
            Add Event
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
              <DialogContentText>
                please
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Event Title"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Event date"
                
                type="datetime-local"
                defaultValue={values.someDate}
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setEnterDate(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleAddEvent}>Add</Button>
            </DialogActions>
          </Dialog>

          <Button color="inherit" onClick={() => auth.signOut().then(() => {
            history.push('/')
          })}>Log Out</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
