import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Task from './components/Task';

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>                                                
				<Route path="*" element={<Task />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default Router;