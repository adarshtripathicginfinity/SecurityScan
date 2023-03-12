import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

//components
import SwipeDrawer from './SwipeDrawer';
import Form_Page from './pages/Form_page';
import Result_list from './pages/Result_list';

const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
            <Router>
                <SwipeDrawer />
                <Routes>        
                    <Route path='/' element={<Form_Page />} />
                    <Route path='/Result_list' element={<Result_list />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Home;