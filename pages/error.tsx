import React from "react";
import dynamic from 'next/dynamic'

const ErrorPage = dynamic(() => import('../components/HandleError'), {
    loading: () => <p> </p>,
  })

function error() {
    

    return (
        <div>
       <ErrorPage/>
    </div>

    );
}

export default error;
