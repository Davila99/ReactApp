import avatar from './image/avatar.jpg'
const ShowAvatar=() =>{

    return(
<div style={{
    backgroundColor:'#8B8B8B',
    width:'400px',
    height:'400px',
    marginTop:'100px',
    marginLeft:'40%'
    
}}>
<img src={avatar} alt="" style={{
    borderRadius:'50%',
    width:'300px',
    height:'300px',
   marginTop:'50px',
   marginLeft:'50px'
}}/>

</div>
    );

}

export {
    ShowAvatar
}