import React, { Component } from 'react';
import Items from './components/Items'
import NavBar from './Navigation'
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import * as animationData from './lotties/loading.json'


class App extends Component {
  
  render() {
    const defaultOptions = {
      loop: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    };

    return (
      <Grid container style={{padding: '1em', background: '#1a001a',  height:'100%', width:'100%', fontFamily: 'Courier New'}}>
        <Grid item container xs={12}>
          <NavBar/>
        </Grid>
        <Grid item xs={12} sm={3} >
          <h1 style={{textAlign: 'center', fontSize: '2em', color: 'white', padding: '0'}}>Kotisi<br/>tavarat</h1>
          <Lottie 
              options={defaultOptions}
              height={'10em'}
              width={'10em'}
              />
        </Grid>
      <Grid item container xs={12} sm={5} >
        <Grid item xs={12} sm={2}/>
        <Grid item xs={12} sm={8} style={{background: 'white'}}>
        <Items/>
        </Grid>
        <Grid item xs={12} sm={2}/>
      </Grid>
      <Grid item xs={12} sm={4}>
      <div style={{color: 'white', padding: '1em'}}>
            <h1>Mitä omistat?</h1>
            <p style={{textAlign:'justify'}}>Aina ei muista, mitä kaikkea omistaa. Kaappien
            perukoilta löytyy kaikenlaista, jonka olemassaolon oli jo ehtinyt
            unohtaa. 
            <br/>
            <br/>
            Kun seuraavan kerran järjestelet varastojasi, merkitse ylös, mitä omistat ja 
            missä tavarasi oikein sijaitsevat. Näin voit myöhemmin tarkistaa, 
            onko sinulla jo tarvitsemasi tuote ja mihin oikein olet sen säilönyt. Näin kohtaat tilanteita,
            joissa huomaat ostaneensi kolmannen paketin samoja paristoja tai harvoin
            käyttössä olevaa, mutta toki tarpeellista riisiviinaetikkaa, huomattavasti harvemmin. 
            <br/>
            <br/>
            Sivustolla voit myös pitää kirjaa käytettymiesi kulutushyödykkeiden 
            menekistä. Lisäksi, jos merkitset palveluun tuotteittesi parasta ennen päiväyksen, sovellus
            muistuttaa sinua tuotteen vanhenemisesta.
            </p>
          </div>
        </Grid>
      <Grid item xs={12} style={{padding: '2em'}}/>
      <Grid item xs={12} style={{background: 'white'}}/>
    </Grid>
    );
  }
}

export default App;
