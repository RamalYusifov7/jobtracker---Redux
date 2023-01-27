
import { GlobalStyle } from './components/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Error from './pages/Error';
import Login from './pages/Login';
import SharedLayout from './pages/SharedLayout';
import AllJobs from './pages/Main/AllJobs';
import AddJob from './pages/Main/AddJob';
import Profile from './pages/Main/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
 const theme = {
  colors:{
     main:"#356899",
     mainAlt:"#69a5df",
     primary:"#111D28",
     secondary:"#4F9CF9",
     danger:"rgb(234,84,85)",
     dark:"#212529",
  },
  shadows:{
    shadow1:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  }
}
function App() {
  return (
   <Router>
       <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer 
         position="top-center"
          autoClose={3000}
         hideProgressBar={true}
        />
          <Routes>
               <Route path='/'
                element={
                    <ProtectedRoute>
                     <SharedLayout/>
                    </ProtectedRoute>}>
                   <Route index  element={<AllJobs/>}/>
                   <Route path='add-job' element={<AddJob/>}/>
                   <Route path='profile' element={<Profile/>}/>
               </Route>
               <Route path='/landing' element={<Landing/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='*' element={<Error/>}/>
          </Routes>
      </ThemeProvider>
   </Router>
  );
}

export default App;
