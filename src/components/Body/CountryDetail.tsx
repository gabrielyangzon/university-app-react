import React from 'react';

class IState {
    details : any
}

const CountryDetail = ({details} : IState) => {
     
    

    let detailsComponent = details !== undefined ? 
                <div className='card mb-2 p-2'>
                   <p> Continent:{details.region} </p>
                   <p> Currency :{Object.values(details.currencies)[0].name}</p>
                </div>

    : <></>

    return(<>
        {detailsComponent}
        </>)
        
       
    
}

export default CountryDetail;