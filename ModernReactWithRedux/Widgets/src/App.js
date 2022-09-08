import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "Who is Bilbo Baggins?",
    content: "Bilbo Baggins was a hobbit of the Shire!",
  },
  {
    title: "What is his characteristics?",
    content: "Brown and curly hair, blue eyes and hairy feet. ",
  },
  {
    title: "Was he known by other names?",
    content:
      "Mr. Baggins, Bilbo Took... and by titles as such: Elf-friend, Ring-bearer, Burglar.",
  },
];

const options = [
  {
    label: "Gandalf, the Grey",
    info:
      "Was an Istar (Wizard), dispatched to Middle-earth in the Third Age to combat the threat of Sauron. He joined Thorin II Oakenshield and his company to reclaim the Lonely Mountain from Smaug, helped form the Fellowship of the Ring to destroy the One Ring, and led the Free Peoples in the final campaign of the War of the Ring.",
  },
  {
    label: "Gimli, Elf-friend",
    info:
      "Son of Glóin, was a Dwarf of the House of Durin and a member of the Fellowship of the Ring, unlike other Dwarves, he readily fought alongside Elves in the War of the Ring against Sauron at the end of the Third Age. After the defeat of Sauron, in the early Fourth Age, he was given the lordship over the Glittering Caves at Helm's Deep.",
  },
  {
    label: "Aragorn",
    info:
      "Aragorn II, son of Arathorn II and Gilraen, also known as Elessar and Strider, was the 16th and last Chieftain of the Dúnedain of the North; later crowned King Elessar Telcontar (March 1, 2931 - FO 120), the 26th King of Arnor, 35th King of Gondor and first High King of Gondor and Arnor since the short reign of Isildur. He was a great Ranger and warrior.",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShownDropdown] = useState(true);

  return (
    <div>
      <Header />
      <div style={{ margin: "2vh" }}>
        <Route path="/">
          <Accordion items={items} />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/dropdown">
          <div>
            <button
              style={{
                marginBottom: "5px",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "lightgrey",
              }}
              className="ui medium button"
              onClick={() => setShownDropdown(!showDropdown)}
            >
              Toggle Dropdown
            </button>
            {showDropdown ? (
              <Dropdown
                label="Select a Hero"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
              />
            ) : null}
          </div>
        </Route>

        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};

export default App;
