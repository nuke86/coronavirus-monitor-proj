import React from 'react'
import axios from 'axios';





export default class Region extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            regions : [],

        }
    }

    componentDidMount(){
        var compare = ( a, b ) => {
            if ( a["totale casi"] < b["totale casi"] ){ return 1;}
            if ( a["totale casi"] > b["totale casi"] ){ return -1;}
            return 0;
    }
        


         axios.get(`https://openpuglia.org/api/?q=getdatapccovid-19`).then(res => {
            //console.log(res.data)
            const jsonRegion = res.data
            this.setState({
                regions: jsonRegion.sort(compare)
                
            })
        })
    }
    
    

    render(){
        var imgRegions = [
                'piemonte', 'lombardia', 'emiliaromagna', 'veneto', 
                'friuliveneziagiulia', 'marche', 'toscana','liguria',
                'lazio', 'campania', 'puglia', 'sicilia', 'calabria',
                'abruzzo', 'umbria', 'sardegna', "valled'aosta", 'molise',
                'basilicata', 'patrento', 'pabolzano'
                ];
        const newImgRegion = (item) => {
            var singleRegion;
            imgRegions.map((imgRegion) => {
                // minuscolo - toglie spazi bianchi e unisce - toglie punti e unisce
                var regionLowcase = item["regione"].toLowerCase().replace(/\s/g, '').split('.').join("");
                //console.log(item["regione"].toLowerCase().replace(/\s/g, ''))
                // item.region è bloccato, quello che fa il loop è imgRegions
                // duqnue quando tocca per esempio a item.region settato su Lombardia fa
                // un loop dentro a imgRegions e pesca Lombardia
                if(regionLowcase == imgRegion){
                    //console.log(imgRegion)
                    singleRegion = imgRegion;
                }
            })
            return singleRegion
        }

        // serve per spezzettare la data
        function dataSlice(date) { 
            return date.slice(0, 2) + '-'  + date.slice(2, 4) + '-' + date.slice(4, 8);
        }

        // 
        const regioniItaliane = this.state.regions.map((item, index ) => {
            
                return    <div className="card">
                            <div className="card-header" id={'heading' + index}>
                              <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                  {item.regione}
                                </button>
                              </h5>
                            </div>

                            <div id={"collapse" + index} className="collapse show" aria-labelledby={'heading' + index} data-parent="#accordion">
                              <div className="card-body">
                                <p style={{color:'rgb(131, 131, 131)'}} className='region-data'>Aggiornati al {dataSlice((String(item.data).split('-').reverse().join('')))} </p>
                                    
                                    <ul className='region-ul'>
                                        <li><i className="fa fa-users"></i>{this.props.textTotaliCasi} {item["totale casi"]}</li>
                                        <li><i className="fa fa-microscope">&nbsp;</i>{this.props.textTamponi} {item.tamponi}</li>
                                        <li><i className="fa fa-procedures">&nbsp;</i>{this.props.textTerapia}{item["terapia intensiva"]}</li>
                                        <li> <i className="fa fa-cross">&nbsp;</i> {this.props.textDeceduti} {item.deceduti}</li>
                                    </ul>
                              </div>
                            </div>
                          </div>
                        

/*
                            <div className="w-100 setmargin"></div>
                            <section className='col-6 setmargin' >
                                <div className='region'>
                                    <h3 style={{textAlign: 'center'}} className='mt-4'> 
                                        {item.regione}
                                    </h3>
                                    <p style={{color:'rgb(131, 131, 131)'}} className='region-data'>Aggiornati al {dataSlice((String(item.data).split('-').reverse().join('')))} </p>
                                    
                                    <ul className='region-ul'>
                                        <li><i className="fa fa-users"></i>{this.props.textTotaliCasi} {item["totale casi"]}</li>
                                        <li><i className="fa fa-microscope">&nbsp;</i>{this.props.textTamponi} {item.tamponi}</li>
                                        <li><i className="fa fa-procedures">&nbsp;</i>{this.props.textTerapia}{item["terapia intensiva"]}</li>
                                        <li> <i className="fa fa-cross">&nbsp;</i> {this.props.textDeceduti} {item.deceduti}</li>
                                    </ul>
                                </div>
                            </section>
                           */
            })
        
            // render return
            return(
                <div id="accordion">
                    {regioniItaliane}
                </div>
        )
    }
}
