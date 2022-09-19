
import axios from "axios";


export function getUniversities () {
 return axios.get('http://universities.hipolabs.com/search?country=United+States')
    .then(function (response) {
      // handle success
      //console.log(response.data);
     return response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


}


export function getCountries(){
    
     return axios.get('https://restcountries.com/v3.1/all')
                 .then(function (response) {
                  // handle success
                  //console.log(response.data);
                  return response.data
                })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}