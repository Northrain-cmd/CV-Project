import '../css/General.css';
import React from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      name: "",
      phone:"",
      email: "",
      git: "",
      country: null
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { edit, name, phone, email, git, country } = this.state;
    this.setState({
      edit:!edit,
      name: name,
      phone: phone,
      email: email,
      git: git,
      country: country
    });
  }

  onChange(e, name = "") {
    // --- <Handle country select input> ---
    if(e === null) {
      this.setState({
        country: name
      })
      return
    }
    if(e.target === undefined) {
      this.setState({
        country: e.id
      })
      return
    }
    // <--- End of country select input handler ---/>

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {_edit, name, phone, email, git } = this.state;
    const display = <div className="d-flex flex-column align-items-center display mt-4">
      <h4 className="mx-auto my-4">General Information</h4>
      <h5><span>{name}</span></h5>  
      {this.state.country && <CountrySelect className="mb-2" id="country" value={this.state.country} disabled/> } 
      <h5 className="mb-4 mt-2"><FontAwesomeIcon color="green" className="mr-2" size="lg" icon={faMobileAlt} /> <a href={"tel:"+phone}>{phone}</a></h5>  
      <h5 className="mb-4"><FontAwesomeIcon color="green" className="mr-1" size="lg" icon={faEnvelope} />  <a href={"mailto:" + email}>{email}</a></h5>  
      {this.state.git && <h5 className="mb-2"><FontAwesomeIcon color="green" className="mr-2" size="lg" icon={faGithubAlt} /><a href={git}>Github</a></h5> }  
      <button className="btn btn-success mt-4 p-2 w-50" type="button" onClick={this.onEdit}>Edit</button>
    </div>;

    return (
      this.state.edit ? 
      <form className="px-lg-5 px-md-3" onSubmit={this.onSubmit} id="general-form">
        <label className="mx-auto mt-2 h4" htmlFor="general-form">General Information</label>
        <label htmlFor="name">Name</label>
        <input placeholder="Your first and last names" required className="mb-2" value={this.state.name}  onChange={this.onChange} id="name" name="name"></input>
        <label htmlFor="country">Country</label>
        <CountrySelect noMatchesText="" className="mb-2" name="country" id="country" value={this.state.country} onChange={this.onChange}/>
        <label htmlFor="phone">Phone</label>
        <input placeholder="Your phone number" type="tel" required className="mb-2" value={this.state.phone}  onChange={this.onChange} id="phone" name="phone"></input>
        <label htmlFor="email">Email</label>
        <input placeholder="myemail@example.com" type="email" required className="mb-2" value={this.state.email}  onChange={this.onChange} id="email" name="email"></input>
        <label htmlFor="git">Github Link</label>
        <input placeholder="Link your Github account (optional)" className="mb-2" value={this.state.git}  onChange={this.onChange} id="git" name="git"></input>
        <button className="btn btn-success p-2 mx-auto w-50 mt-3" type="submit">Submit</button>
      </form>
      : display
    )
  }
}

export default General;