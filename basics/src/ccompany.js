function ccompany(props) {

    const {companyName} = props
    const {numOfEmployees} = props
    const {companyAddress} = props

    return (
      <div>
        <h2>The company name is {companyName}</h2>
        <h2>The company have {numOfEmployees} employees</h2>
        <h2>The company is located in {companyAddress}</h2>
      </div>
    );
  }
  
  export default ccompany;