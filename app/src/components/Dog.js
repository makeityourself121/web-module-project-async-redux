import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux'
import {getData} from '../actions'
// import axios from 'axios'
const Dog = (props) => {
const {dog, isFetching, err}= props

    useEffect(()=>{
        props.getData()
    }, [])
    
    const handleClick = ()=> {
        props.getData();
      }

    if (err) {
        return <h2>We got an error: {err}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }
    return (
        <div>            
          <h1>Dog Photos</h1>
        <img src={dog.message} style={{width:'500px', height:'500px', borderRadius:'10%'}}/><br/>
        <button onClick={handleClick}>Get new Dog</button>
        </div>
    );
};

const mapStateToProps = state =>{
  
    
    return{
      
        dog: state.dog,
        isFetching: state.isFetching,
        err: state.err
    }
}
export default connect(mapStateToProps, {getData})(Dog);

