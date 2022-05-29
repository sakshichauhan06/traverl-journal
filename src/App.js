
import './style.css'
import Nav from './components/Nav';
import Main from './components/Main';
import data from './data';

function App() {
  let cardElements = data.map(items => {
    return (
      <Main 
        title={items.title}
        location={items.location}
        googleMapsUrl={items.googleMapsUrl}
        startDate={items.startDate}
        endDate={items.endDate}
        description={items.description}
        imageUrl={items.imageUrl}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <section>
        {cardElements}
      </section>
    </div>
  );
}

export default App;
