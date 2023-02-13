import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
/**
 * Khi khởi chạy lệnh "npm run start",file index.tsx này được gọi mặc định
 */

// theme:css
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'rgb(26,32,44)',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* Provider store={store}:Gắn store của redux vào reactjs*/}
    <Provider store={store}>
      {/* Dự án dùng thư viện chakra-ui để xây dựng các component,tương tự các thư viện khác như Antd,react-boostrap,material ui.... */}
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
