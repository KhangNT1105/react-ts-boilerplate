import React from 'react';
import Header from '../../component/header/Header';
import Sidebar from '../../component/sidebar/Sidebar';
import './HomeLayout.scss';

const HomeLayout: React.FC = ({ children }) => {
    return <div className="homeLayout">
        <Header />
        <Sidebar />
        {children}
    </div>;
}
export default HomeLayout;