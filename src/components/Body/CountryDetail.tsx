import React from 'react';

class IState {
    details : any
}

const CountryDetail = ({details} : IState) => {
     
    //console.log(Object.values(details.currencies))
   
    let ctryDetail : any = details !== undefined ? Object.values(details.currencies)[0] : undefined

   
   

    let detailsComponent = details !== undefined ? 
                 <div className='card mb-2 p-2'>
                    Continent:{details.region}
                     <br/>
                    Currency :{ctryDetail.name} ( {ctryDetail.symbol})
                </div>

    : <></>

    return(<>
        {detailsComponent}
        </>)
        
       
    
}

export default CountryDetail;