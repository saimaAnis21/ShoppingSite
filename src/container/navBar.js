import React, { Component } from 'react';
import Modal from 'react-modal';
import CatLinks from '../components/catLinks';
import CurrencySelect from '../components/currencySelect';
import { Link } from 'react-router-dom';
import Cart from '../components/cart';

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state={
            modalShow:false,
        }
    }

    componentDidMount(){
        Modal.setAppElement('#root');
    }

    render() {
        return (
            <div style={{ display:'flex', justifyContent:'space-around', border:'5px solid green', position:'absolute', left:'0%', right:'0%', top:'0%', bottom:'0%', width:'1440 px', height:'80px', backgroundColor:'#FFFFFF'}}>
                <CatLinks />
                <CurrencySelect />
                <Link to={`/cart`} onMouseOver={() => this.setState({modalShow:true,})} > Cart</Link>
                <Modal isOpen={this.state.modalShow} onRequestClose={() => this.setState({modalShow:false,})} 
                style={{
                    content: {
                          position: 'absolute',
                          width:'50%',
                          top: '10px',
                          left: '40px',
                          right: '40px',
                          bottom: '300px',
                          border: '1px solid #ccc',
                          background: '#fff',
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                          borderRadius: '4px',
                          outline: 'none',
                          padding: '10px',
                          margin:'10px'
                        }
                    
                  }}>
                    <Link to={`/cart`} onClick={() => this.setState({modalShow:false,})} > Cart</Link>
                    <Cart modal={true} />
                </Modal>
            </div>
        )
    }
}
