import React, { Component } from 'react'
import AddContact from './addcontacts'
import axios from 'axios'

export default class Editcontact extends Component {
state ={
    user :  {},
}

componentDidMount = () => {
   
    axios.get(`/contacts/${this.props.match.params.id}`).then((res) => {
     this.setState ({
         user : res.data
     })
    })}

 

    editcontact = (contact) => {
        if (contact.name &&contact.email&&contact.phone&&(contact.email.indexOf("@") !== -1 )) 
        {
          axios
          .put(`/upcontacts/${contact._id}`,  {...contact})
        } else alert('please enter a valid modification')
       
    
      } 

    render() {
        return (
<AddContact
              show={true}
              handleShow={()=>{}}
              edit={true}
              addcontact={this.editcontact}
              contact={this.state.user}/>        )
    }
}
