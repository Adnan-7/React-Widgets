import React, { useState } from 'react';
import Dropdown from './components/dropdown';
import Translate from './components/translate';
import Accordion from './components/accordion';
import Search from './components/search';
import Navbar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from './components/notFound';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path='/search' component={Search} />
          <Route path='/translate' component={Translate} />
          <Route
            path='/dropdown'
            render={(props) => (
              <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                label='Select a Colour'
                {...props}
              />
            )}
          />
          <Route path='/not-Found' component={NotFound} />

          <Route
            path='/home'
            exact
            render={(props) => <Accordion items={items} {...props} />}
          />
          <Redirect from='/' to='/home' />

          <Redirect to='/not-found' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
