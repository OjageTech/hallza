import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routing/routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />)
        })}

      </Routes>
    </BrowserRouter>

  );
}

export default App;
