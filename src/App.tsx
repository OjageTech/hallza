// import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import routes from './routes/routes';
import { fetchVenuesData } from './features/venues/venues-slice';
import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();

  // Setting page scroll to 0 (top) when changing route and beginning data fetching
  useEffect(() => {
    // Dispatch the fetchVenuesData action when the component mounts
    dispatch(fetchVenuesData());

    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [document.URL, dispatch]);
  const helmetContext = {};

  return (
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>

        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
