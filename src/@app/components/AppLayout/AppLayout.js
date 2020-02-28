import React from 'react';
import {withRouter} from 'react-router-dom';
import {AppLayouts} from '@app';

function AppLayout(props){
    const Layout = AppLayouts['Layout1'];
    return (
        <Layout  {...props}/>
    );
}

export default withRouter(React.memo(AppLayout));
