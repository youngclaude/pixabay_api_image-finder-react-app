import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { MuiThemeProvider } from '@material-ui/core/styles'
import axios from 'axios';

const theme = ({
    /* theme for v1.x */
    palette: {
        primary: '#fff',
        secondary: '#efe',
    },
    status: {
        danger: 'orange',
    },
});

class App extends Component {
   render() {
       return (
           <MuiThemeProvider theme={theme}>
               <div>
                   <NavBar/>
               </div>
           </MuiThemeProvider>
       );
   }
}

export default App;
