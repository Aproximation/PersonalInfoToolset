import * as React from 'react';
import rp = require('request-promise');

let calledDone = false;
interface ISearchState{
    searchResponse:string
}


export class Search extends React.Component<any, ISearchState>{
    
    public constructor(){
        super();
        this.state = {
            searchResponse: "0"
        };
    }

    private getRozkladJazdy():void{
        let options = {  
          uri: 'https://www.mazowieckie.com.pl/pl/jsearch?station_from=O%C5%BCar%C3%B3w+Mazowiecki&station_from_id=&station_to=Warszawa+%C5%9Ar%C3%B3dmie%C5%9Bcie&station_to_id=33571&date=2018-02-27&hour=20%3A55&by%5Bstation_by%5D%5B0%5D=&by%5Bstation_by_id%5D%5B0%5D=&op=Szukaj',
          withCredentials: false
        }
      
        rp(options)
        .then(function (response) {
          let jsonResults = JSON.parse(response).value;
          this.setState({searchResponse:jsonResults})
        }.bind(this))
        .catch(function (error) {
          this.setState({searchResponse:error.message})
        }.bind(this));   
      }

    render(): React.ReactElement<any>{
        if(!calledDone){
            this.getRozkladJazdy();
            calledDone = true;
        }
        
        return (
            <p>{this.state.searchResponse}</p>
        );
    }
}