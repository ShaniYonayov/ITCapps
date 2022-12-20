function Person(props) {

    const {personName} = props
    const {personLocation} = props

    return (
      <div>
        <h1>person component</h1>
        <h2>The name is {personName}</h2>
        <h2>I live in {personLocation}</h2>
      </div>
    );
  }
  
  export default Person;