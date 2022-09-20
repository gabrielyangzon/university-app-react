import React , {useEffect , useState} from 'react'
import * as dataService from '../../services/services'
import CountryDetail from './CountryDetail';
import Grid from './Grid';
import SelectCountry from './SelectCountry';

class IState   {
    countries : any[] =[]
    selectedCountry : any 
    university : any[] = []
}

export default function Body(){

    let [countries, setCountries] = useState({} as IState);
    let [loadingState,setLoadingState] = useState<boolean>(false)
    
        useEffect(() => {

             dataService.getCountries().then(response => 
                {          
                    setCountries(current => { return { ...current ,university : [], countries : response } }) 
                    setLoadingState(true)
                    console.log(countries.countries)
                  
                }).catch(err => console.log(err))
        },[])
      
        function onChangeCountryHandler(e :any){

              const {value } = e.target;

              let selectedCountry = countries.countries.find(c => c.name.common === value);
            
              dataService.getUniversitiesByCountry(value).then(response => 
                {
                    setCountries(current => { return { ...current ,selectedCountry :selectedCountry, university : response } })          
                }).catch(err => console.log(err))                     
        }




    return <div className='container mt-3'>
            {loadingState === true ? 
                <> 
                  
                      <SelectCountry
                        onChange={onChangeCountryHandler}
                        data={countries.countries} 
                      />

                      <CountryDetail 
                        details={countries.selectedCountry}
                      />
                 
                    <Grid 
                      length={countries.university.length.toString()} 
                      data={countries.university}
                      />
                </>
                :<></>
               
            }
          </div>
}



