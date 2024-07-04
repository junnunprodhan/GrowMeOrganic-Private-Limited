
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from './theme/theme';


// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <div >
          <div>
            <App />
          </div>
        </div>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

