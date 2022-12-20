function Company(props) {

    const {companyName, numOfEmployees, companyAddress} = props

    return (
      <div>
        <h2>* The company name is {companyName}, it has {numOfEmployees} employees and it located in {companyAddress}.</h2>
      </div>
    );
  }
  
  export default Company;
