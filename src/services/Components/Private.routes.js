import {Navigate} from 'react-router-dom';
import {Path} from '../../config/url.config';


const TargetPage = ({Component, hasLayout, user}) => {

    const isLoggedIn = localStorage.getItem('Is_Logged_In') === 'true';

    if (!isLoggedIn) {
        return <Navigate replace to={Path.LOGIN}/>
    } else {


        return (
                <>

                    {Component}
                </>
        )
    }
}

export const PrivateRoute = ({component, hasLayout, user}) => {
    return (
        <TargetPage Component={component} />
    );
}