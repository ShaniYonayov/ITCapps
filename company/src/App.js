import './App.css';
import Company from './Company';
function App() {
  return (
    <div className="App">
      <Company companyName = "DX" numOfEmployees = "200" companyAddress = "Tel Aviv"/>
      <Company companyName = "RS" numOfEmployees = "5000" companyAddress = "Ramat Gan"/>
      <Company companyName = "ML" numOfEmployees = "951" companyAddress = "Jerusalem"/>
    </div>
  );
}

export default App;


