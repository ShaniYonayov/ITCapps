import './App.css';
import ccompany from './ccompany';
function App() {
  return (
    <div className="App">
      <ccompany companyName = "DX" numOfEmployees = "200" ompanyAddress = "Tel Aviv"/>
      <ccompany companyName = "RS" numOfEmployees = "5000" ompanyAddress = "Ramat Gan"/>
      <ccompany companyName = "ML" numOfEmployees = "951" ompanyAddress = "Jerusalem"/>
    </div>
  );
}

export default App;
