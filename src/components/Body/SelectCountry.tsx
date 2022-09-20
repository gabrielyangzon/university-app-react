import React, { useEffect } from 'react'


 interface IProps  {
    data : any[],
    onChange  :any

 }


export default function SelectCountry ({data , onChange} : IProps)  { 
   
  


    return  <select onChange={(e) => onChange(e)} className="form-select w-25 mb-2" aria-label="Default select example">

                 <option defaultValue={0}>Select Country</option>
                {
                  data.map((country : any) => country.name.common)
                        .sort()
                             .map((countryName :any) => (<option key={countryName} value={countryName}>{countryName}</option>))                 
                }

            </select>
}

