import React from 'react';
import '../css/Experience.css';

class Experience extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      company: "",
      job: "",
      from:"",
      to:"",
      desc:"",
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { edit, company, job, from, to, desc } = this.state;
    this.setState({
      edit:!edit,
      company: company,
      job: job,
      from: from,
      to: to,
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
    const {_edit, company, job, from, to, desc } = this.state;
    const display = <div className="d-flex flex-column align-items-center display-exp mt-4">
      <div className="container">
        <h5 className="mb-4 lead">Company <span>{company}</span></h5>  
        <h5 className="mb-4 lead">Job Title <span>{job}</span></h5>  
        <h5 className="mb-4 lead">From: <span>{from}</span></h5>
        <h5 className="mb-4 lead">To: <span>{to}</span></h5>
         {desc && <p className="mb-4"><span className="lead">Job description </span>{desc}</p> }
      </div>
      <button className="btn btn-outline-success mb-4 p-2 w-50" type="button" onClick={this.onEdit}>Edit</button>
    </div>;

    return (
      this.state.edit ? 
      <form className="px-lg-5 px-md-3 mb-4" onSubmit={this.onSubmit} id="experience-form">
        <label htmlFor="company">Company</label>
        <input placeholder="Company name" required className="mb-2" value={this.state.company}  onChange={this.onChange} id="company" name="company"></input>
        <label htmlFor="job">Job Title</label>
        <input placeholder="Your position" className="mb-2" value={this.state.job}  onChange={this.onChange} id="job" name="job" required></input>
        <label htmlFor="from">From</label>
        <input type="number" placeholder="YYYY" max="2200" min="1900" required className="mb-2" value={this.state.from}  onChange={this.onChange} id="from" name="from"></input>
        <label htmlFor="to">To</label>
        <input type="number" placeholder="YYYY" max="2200" min="1900" className="mb-2" value={this.state.to}  onChange={this.onChange} id="to" name="to"></input>
        <textarea placeholder="Your job description" onChange={this.onChange} id="desc" name="desc" className="mb-2 mt-2" value={this.state.desc}></textarea>
        <button className="btn btn-outline-success p-2 mx-auto w-50 mt-3" type="submit">Submit</button>
      </form>
      : display
    )
  }
}

export default Experience