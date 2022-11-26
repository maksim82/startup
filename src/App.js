import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import Profile from './components/profile/Profile';
import DownloadProject from './components/downloadProject/DownloadProject';
import Project from './components/project/Project';
import NotFound from './components/notFound/NotFound';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/create" element={<DownloadProject />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default App;