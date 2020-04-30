import React, { Component } from 'react';
import AddContact from './addcontacts';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    show: false,
  };




  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };




  render() {
    return (
      
        <div>
          <div className='contactinfos'>
            <img src='https://imobie-resource.com/fr/support/img/sauvegarder-les-contacts-iphone.png'/>
          <h3>{this.props.onecontact.name}</h3>
        <p> <span role='img'>📧</span> : {this.props.onecontact.email}</p>       
          <p>  <span role='img'>📱</span> : {this.props.onecontact.phone} </p>
          <div className='svggroup'>
          <svg onClick={() => this.props.deletecontact(this.props.onecontact._id)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-times" class="svg-inline--fa fa-user-times fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg> 
          <Link to={`/contacts/${this.props.onecontact._id} `}>
      <svg onClick={() => this.handleShow()} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" class="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75 -67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg> 
      </Link>
          </div>
          </div>
          {/* <div className='buttons'>
          <button className='butns' type='button' onClick={() => this.props.deletecontact(this.props.onecontact._id)}> Delete Contact </button>
          </div> */}
          {this.state.show ? (
            {/* <AddContact
              show={this.state.show}
              handleShow={this.handleShow}
              edit={true}
              addcontact={this.props.editcontact}
              contact={this.props.onecontact}/>  */}
          ) : null}
        </div>
    
    );
  }
}
export default Contact;