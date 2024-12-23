import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Todo from './components/Task';

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>                                                
				<Route path="*" element={<Todo />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default Router;