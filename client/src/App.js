import React, { Component } from 'react';
import Contact from './components/contactlist';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddContact from './components/addcontacts';
import Editcontact from './components/Editcontact';


class App extends Component {
  state = {
    contactlist: [],
    show: false,
  };




  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };


  componentDidMount() {
    this.getAll();
  }

  handleChange = (e) => {
    this.setState({

  cont : {...this.state.cont, 
            [e.target.name]: e.target.value
         }  


    });
  };

  getAll = () =>
    axios.get('/contacts').then((res) => {
      this.setState({
        contactlist: res.data,
      });
    });

  addcontact = (addedcontact) => {
    if (addedcontact.name &&addedcontact.email&&addedcontact.phone&&(addedcontact.email.indexOf("@") !== -1 )){
      axios.post('/addcontact', addedcontact).then(this.getAll());
    } else alert('Please enter a valid information')

  }

  deletecontact = (id) => {
    axios.delete(`/deletecontact/${id}`).then(this.getAll());

  }



  editcontact = (contact) => {
    if (contact.name &&contact.email&&contact.phone&&(contact.email.indexOf("@") !== -1 )) 
    {
      axios
      .put(`/upcontacts/${contact._id}`, { name : contact.name, email : contact.email, phone : contact.phone})
      .then(this.getAll()). catch((err) => console.log(err.message) )
    } else alert('please enter a valid modification')
   

  }  
    

  render() {
    return (
      <div className='App'>
           <Router>

           <Link to="/addcontact">
             <button id ='homebtn'>Home Page</button>
                    </Link>
           <Link to="/contacts">
           <svg id='listsvg' aria-hidden="true" focusable="false" data-prefix="far" data-icon="list-alt" class="svg-inline--fa fa-list-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path></svg>          </Link>
          <Route   path="/addcontact" render={() =>( 

        <AddContact
          show={this.state.show}
          handleShow={this.handleShow}
          addcontact={this.addcontact}
        />
          )}/> 
          <Switch>
         <Route
           exact path="/contacts"
            render={() => (
        <div className='list'>
          {this.state.contactlist.map((person) => (
            
            <Contact
              onecontact={person}
              deletecontact={this.deletecontact}
              editcontact={this.editcontact}
            />
          ))}
          </div>
          )} />
          <Route
         exact 
         path="/contacts/:id" 
         render = {()=> (
         <AddContact
          show={true}
              handleShow={()=>{}}
              edit={true}
              addcontact={this.editcontact}
         />)}
        
         />
       </Switch>
        </Router>
      </div>
    );
  }
}

export default App;