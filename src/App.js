
import './Main.scss';
import SidebarNav from './Componets/Navbar/Navbarscripts/SidebarNav';
import SearchBar from './Componets/Searchbar/SearchBar';
import{SearchTestData} from './Componets/Searchbar/SearchTestData';



function App() {
  return (
    <>
<div className='App'>
<SidebarNav />
<SearchBar placeholder="Search projects....." data={SearchTestData}/>

</div>



    </>
  );
}

export default App;
