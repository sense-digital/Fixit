import React, {Component} from 'react';
import Box from './Box';
import { Link, NavLink } from 'react-router-dom';
import '../pages/styles/HomeSections.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

class ReserveSection2 extends Component {  
  constructor () {
    super() 
    this.state = {
      data:[] 
    }
  }


  componentDidMount () {
    firebase.firestore().collection('servicios').get().then((snapShots)=>{
      this.setState({
        data: snapShots.docs.map(doc => {
          return (doc.data());
        })
      })
    })
  }
    


  render () {   
      return (
        <div>
         
{/* INICIO de título  */}
         <div className='hero-container'>
              <div className='herosectiont-1'>
                  <h2>2. ¿Que necesitas arreglar?</h2>
              </div>
            </div>
{/* FIN de título */}


{/* INICIO servicios para mantenimiento  */} 
         <ul>
          {this.state.data.map(OptionBox=>{
                return( 
                  // OptionBox.celulares === "pantalla rota"
                  <Box key={OptionBox.servicio} descripcion={OptionBox.servicio}/> 
                  
                )
          })}
         </ul>
{/* FIN servicios para mantenimiento  */} 


        </div>
      );
    }
  }

export default ReserveSection2;