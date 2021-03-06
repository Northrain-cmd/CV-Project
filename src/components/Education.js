import React from 'react';
import '../css/Education.css';

class Education extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      school: "",
      city: "",
      from:"",
      to:"",
      degree:"",
      desc:""
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { edit, school, city, from, to, degree, desc } = this.state;
    this.setState({
      edit:!edit,
      school: school,
      city: city,
      from: from,
      to: to,
      degree: degree,
      desc: desc
    });
  }

  onChange(e) {
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
    const {_edit, school, city, from, to, degree, desc } = this.state;
    const display = <div className="d-flex flex-column align-items-center display-edu mt-4">
      <div className="container">
        <h5 className="mb-4 lead">Institution: <span>{school}</span></h5>  
        <h5 className="mb-4 lead">City: <span>{city}</span></h5>  
        <h5 className="mb-4 lead">From: <span>{from}</span></h5>
        <h5 className="mb-4 lead">To: <span>{to}</span></h5>
        <h5 className="mb-4 lead">Qualification: <span>{degree}</span></h5>
         {desc && <p className="mb-4"><span className="lead">Additional info: </span>{desc}</p> }
      </div>
      <button className="btn btn-outline-success mb-4 p-2 w-50" type="button" onClick={this.onEdit}>Edit</button>
    </div>;

    return (
      this.state.edit ? 
      <form className="px-lg-5 px-md-3 mb-4" onSubmit={this.onSubmit} id="education-form">
        <label htmlFor="school">School</label>
        <input placeholder="University name" required className="mb-2" value={this.state.school}  onChange={this.onChange} id="school" name="school"></input>
        <label htmlFor="city">City</label>
        <input placeholder="City" className="mb-2" value={this.state.city}  onChange={this.onChange} id="city" name="city" required></input>
        <label htmlFor="from">From</label>
        <input type="number" placeholder="YYYY" max="2200" min="1900" required className="mb-2" value={this.state.from}  onChange={this.onChange} id="from" name="from"></input>
        <label htmlFor="to">To</label>
        <input type="number" placeholder="YYYY" max="2200" min="1900" className="mb-2" value={this.state.to}  onChange={this.onChange} id="to" name="to"></input>
        <label htmlFor="degree">Degree or stream</label>
        <input placeholder="Qualification" className="mb-2" value={this.state.degree}  onChange={this.onChange} id="degree" name="degree"></input>
        <textarea placeholder="Anything you want to add, but try to keep it short" onChange={this.onChange} id="desc" name="desc" className="mb-2 mt-2" value={this.state.desc}></textarea>
        <button className="btn btn-outline-success p-2 mx-auto w-50 mt-3" type="submit">Submit</button>
      </form>
      : display
    )
  }
}

export default Education