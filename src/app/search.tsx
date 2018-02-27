import * as React from 'react';
//import rp = require('request-promise');
//import XMLHttpRequestPromise = require('xhr-promise');
import XMLrpRedux = require('xhr-promise-redux');

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
        let url = 'https://www.mazowieckie.com.pl/pl/jsearch?station_from=O%C5%BCar%C3%B3w+Mazowiecki&station_from_id=&station_to=Warszawa+%C5%9Ar%C3%B3dmie%C5%9Bcie&station_to_id=33571&date=2018-02-27&hour=20%3A55&by%5Bstation_by%5D%5B0%5D=&by%5Bstation_by_id%5D%5B0%5D=&op=Szukaj';
        fetch(url, 
        {
            //mode: 'no-cors',
            method: 'GET',
            headers: new Headers(
                {"Content-Type": "text/plain",
                 "Accept":"text/html; charset=utf-8"}
             ),
        })
          .then(function(response) {
            console.log(response.type); // "opaque"
          });
    //    XMLrpRedux.get('https://www.mazowieckie.com.pl/pl/jsearch?station_from=O%C5%BCar%C3%B3w+Mazowiecki&station_from_id=&station_to=Warszawa+%C5%9Ar%C3%B3dmie%C5%9Bcie&station_to_id=33571&date=2018-02-27&hour=20%3A55&by%5Bstation_by%5D%5B0%5D=&by%5Bstation_by_id%5D%5B0%5D=&op=Szukaj', {
    //         headers: {
    //             'Content-Type':'text/plain',
    //             'Accept': 'text/html; charset=utf-8',
    //         }
    //       })
    //     .then(function (response) {
    //       let jsonResults = JSON.parse(response).value;
    //       this.setState({searchResponse:jsonResults})
    //     }.bind(this))
    //     .catch(function (error) {
    //       this.setState({searchResponse:error.message})
    //     }.bind(this));   
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