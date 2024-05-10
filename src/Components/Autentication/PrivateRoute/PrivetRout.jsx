
import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({ children }) => {

    const { user, loading } = useAuth();

    // location add 
    const location = useLocation();

    // set Loading
    if (loading) {
        return <div className='grid justify-center'><div className="max-w-72 p-2 ml-20">
            <span className="loading loading-spinner text-warning"></span>
        </div></div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivetRout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRout;