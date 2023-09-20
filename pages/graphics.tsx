import React from "react";
import dynamic from 'next/dynamic'

const Roster = dynamic(() => import('../components/GetRoster'), {
    loading: () => <p>Loading...</p>,
  })

function graphics() {
    

    return (
        <div>
       <Roster/>
    </div>

    );
}

export default graphics;
