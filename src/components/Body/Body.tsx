import React , {useEffect , useState} from 'react'
import * as dataService from '../../services/services'
import Grid from './Grid';
import SelectCountry from './SelectCountry';
import {ErrorBoundary} from 'react-error-boundary'

interface IState  {
    countries : any[] 
    selectedCountry : any 
}

export default function Body(){

    let [countries, setCountries] = useState({} as IState);
    let [loadingState,setLoadingState] = useState<boolean>(false)
    
        useEffect(() => {

             dataService.getCountries().then(response => 
                {
                   
                    setCountries(current => { return { ...current , countries : response } }) 
                    setLoadingState(true)
                    console.log(loadingState)
                }).catch(err => console.log(err))

        },[])


       
        function onChangeCountryHandler(e :any){

            //   dataService.getCountries().then(response => 
            //     {
            //         setCountries(current => { return { ...current , countries : response.data } }) 
                    
            //     }).catch(err => console.log(err))
            console.log(e)
        }

    return <>
            {loadingState === true ? 
               <> <ErrorBoundary  FallbackComponent={ErrorFallback}>
                
                    <SelectCountry onChange={onChangeCountryHandler} data={countries.countries} />
                </ErrorBoundary>
                <Grid data={countries.countries}/>
                </>
                :<></>
               
            }
          </>
}


function ErrorFallback({error, resetErrorBoundary} : any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
