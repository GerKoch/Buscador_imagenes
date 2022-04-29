import Seeker from './Seeker';
import Wall from './Wall';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <BrowserRouter>
                <Seeker />
                <Routes>
                    <Route path="/" element={<Wall />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;