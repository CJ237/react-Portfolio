import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';



// Define the accessible routes, and which components respond to which URL


// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
