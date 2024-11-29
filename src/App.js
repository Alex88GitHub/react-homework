import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Stars from './components/Stars';
import messagesData from './components/MessageHistory/data';
import MessageHistory from './components/MessageHistory';
import ShopCard from './components/ShopCard';
import item from './components/ShopCard/data';
import Portfolio from './components/Portfolio';
import projects from './components/ProjectList/projectsData';
import './App.css';

function App() {
  return (
    <div>
      <Greeting />
      <Counter />
      <ShopCard item={item} />
      <Stars rating = {1}/>
      <MessageHistory list={messagesData} />
      <Portfolio filters={["All", "Websites", "Flayers", "Business Cards"]} selected='All' projects={projects}/>
    </div>
  );
}

export default App;
