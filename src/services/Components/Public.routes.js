import {Navigate} from 'react-router-dom';
import {Path} from '../../config/url.config';
import Header from '../../Components/Layout/Header';
import Menu from '../../Components/Layout/Menu';
import Footer from '../../Components/Layout/Footer';
import SearchBox from '../../Components/Layout/Menu/SearchBox ';
import SubscribeBox from '../../Components/Layout/Footer/SubscribeBox';


const TargetPage = ({Component}) => {

        return (
            <>
                <Header />
                <Menu />
                <SearchBox />
                {Component}
                <SubscribeBox/>
                <Footer />
            </>
    )
}
export const PublicRoutes = ({component, hasLayout, user}) => {
    return (
        <TargetPage Component={component} />
    );
}