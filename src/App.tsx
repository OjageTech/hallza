// import 'animate.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useEffect } from 'react';
import routes from './routes/routes';

function App() {
  // Setting page scroll to 0 (top) when changing route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [document.URL]);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
