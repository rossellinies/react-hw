import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Stories from "./Stories";


const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const nytapi = "k3EOCYL8tL0QZfGchGecvzgvC2Y9Mqni";
const section = "arts";

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState("arts");

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories(data.results))
      .then(setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, [section]);

  return (
    < >
      <Header siteTitle="All the news the Fits We Print" />
      <Nav navItems={navItems} setSection={setSection} />
      {loading || stories.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <Stories stories={stories} />
      )}
    </>
  );
}

export default App;