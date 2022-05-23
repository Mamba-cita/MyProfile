
import './Main.scss';
import SidebarNav from './Componets/Navbar/Navbarscripts/SidebarNav';
import SearchBar from './Componets/Searchbar/SearchBar';
import{SearchTestData} from './Componets/Searchbar/SearchTestData';



function App() {
  return (
    <>
<div className='App'>
<SidebarNav />
<SearchBar placeholder="Search data..." data={SearchTestData}/>

</div>



    </>
  );
}

export default App;
