import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}



// function LoadCountries(){
//   const [countries,setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//       <h2>Visiting Every Country of the World!!!</h2>
//       <p>Available Countries: {countries.length}</p>
//       {
//         countries.map(country => <DisplayCountry name={country.name.common} population={country.population}></DisplayCountry>)
//       }
//     </div>
//   )
// }
// function DisplayCountry(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }
export default App;
