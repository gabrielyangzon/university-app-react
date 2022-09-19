import React, { useEffect } from 'react'


 interface IProps  {
    data : any[],
    onChange  :any

 }


export default function SelectCountry ({data , onChange} : IProps)  { 
   
  
  
    function handleChange(e: any) {
    
        onChange(e);            
    }

    return  <select onChange={(e) => handleChange(e)} className="form-select" aria-label="Default select example">

                 <option defaultValue={0}>Open this select menu</option>
                {
                  data.map((country : any) => country.name.official)
                        .sort()
                             .map((countryName :any) => (<option key={countryName} value={countryName}>{countryName}</option>))                 
                }

            </select>
}

