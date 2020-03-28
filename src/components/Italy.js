import React from 'react';
import axios from 'axios';

const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'decimal',
  }).format(value);
  
export default class Italy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            dataYesterday: [],
            today: ''
        }
    }

    componentDidMount(){
        axios.get(`https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json`)
        .then((res) => {
                const dataItaly = res.data[res.data.length-1];
                const dataItalyYesterday = res.data[res.data.length-2];
                const todayItaly = res.data[res.data.length-1].data
                //console.log(res.data[0].data)
                this.setState({
                    data: dataItaly,
                    dataYesterday: dataItalyYesterday,
                    today: todayItaly
                })
        });
    }



    render(){

        function dataSlice(date) { 
            return date.slice(0, 2) + '-'  + date.slice(2, 4) + '-' + date.slice(4, 8);
        }

        const differenzaTotalecasi = this.state.data.totale_casi - this.state.dataYesterday.totale_casi;
        const differenzaTamponi = this.state.data.tamponi - this.state.dataYesterday.tamponi;
        const differenzaTerapiaintensiva = this.state.data.terapia_intensiva - this.state.dataYesterday.terapia_intensiva;
        const differenzaDeceduti = this.state.data.deceduti - this.state.dataYesterday.deceduti;
        const todayItalyShort = this.state.today.substring(0, this.state.today.length - 8);
        
        return(
            <div className="row dati-italia">
                <h4 style={{width:'100%'}} className='text-center'>
                    Dati aggiornati al {dataSlice((String(todayItalyShort).split('-').reverse().join('').replace(/T/g,'')))}
                </h4> 
				<ul style={{textAlign: "left"}}>	
                <li>Casi Totali: <span className="lista-italia"> {numberFormat(this.state.data.totale_casi)} </span> <br />
					Nuovi casi: <span className={differenzaTotalecasi > 0 ? 'red': 'green'}> {numberFormat(differenzaTotalecasi)} 
				{differenzaTotalecasi > 0 ? <i style={{color: "yellow"}} className="fa fa-arrow-up"></i>:<i style={{color: "yellow"}} className="fa fa-arrow-down"></i>}
                         </span> 
                    
                    
                </li>
                <li>Tamponi: <span className="lista-italia"> {numberFormat(this.state.data.tamponi)} </span> <br />
					Tamponi oggi: <span className={differenzaTamponi > 0 ? 'red': 'green'}> {numberFormat(differenzaTamponi)}
                            {differenzaTamponi > 0 ? <i style={{color: "yellow"}} className="fa fa-arrow-up"></i> : <i style={{color: "yellow"}} className="fa fa-arrow-down"></i>}
                        </span> 
                    
                </li>
                <li>Terapia Intensiva: <span className="lista-italia"> {numberFormat(this.state.data.terapia_intensiva)} </span> <br />
					Nuovi ricoveri: <span className={differenzaTerapiaintensiva > 0 ? 'red': 'green'}> {numberFormat(differenzaTerapiaintensiva)}
                            {differenzaTerapiaintensiva > 0 ? <i style={{color: "yellow"}} className="fa fa-arrow-up"></i> : <i style={{color: "yellow"}} className="fa fa-arrow-down"></i>}
                        </span> 
                    
                </li>
                <li>Deceduti: <span className="lista-italia"> {numberFormat(this.state.data.deceduti)} </span> <br />
					Nuovi deceduti: <span className={differenzaTerapiaintensiva > 0 ? 'red': 'green'}> {numberFormat(differenzaDeceduti)}
                            {differenzaDeceduti > 0 ? <i style={{color: "yellow"}} className="fa fa-arrow-up"></i> : <i style={{color: "yellow"}} className="fa fa-arrow-down"></i>}
                        </span>
                    
                </li></ul>
            </div>
        )
    }


}
