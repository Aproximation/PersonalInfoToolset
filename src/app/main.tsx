import * as React from 'react';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {Search} from './search';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div >
        <Search />
        <Header/>
        <main >
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
