import React from 'react';

import Grid from '@material-ui/core/Grid';
import LogoLottie from '../lotties/LogoLottie';
import ShopCart from './ShopCart';

class Home extends React.Component {
  componentWillMount = () => {
  }

  render() {
    return (
      <Grid container item xs={12} spacing={16}>
        <Grid item xs={12} sm={3}>
          <h1 style={{
            textAlign: 'center', fontSize: '2em', color: 'white', padding: '0',
          }}
          >
          Kotisi
            <br />
          tavarat
          </h1>
          <LogoLottie size={{ height: '10em', width: '10em' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ShopCart />
        </Grid>
        <Grid item container xs={12} sm={4}>
          <Grid item xs={1} />
          <Grid item xs={10} style={{ color: 'white' }}>
            <h1>Mitä omistat?</h1>
            <p style={{ textAlign: 'justify' }}>
            Aina ei muista, mitä kaikkea omistaa. Kaappien
            perukoilta löytyy kaikenlaista, jonka olemassaolon oli jo ehtinyt
            unohtaa.
              <br />
              <br />
            Kun seuraavan kerran järjestelet varastojasi, merkitse ylös, mitä omistat ja
            missä tavarasi oikein sijaitsevat. Näin voit myöhemmin tarkistaa,
            onko sinulla jo tarvitsemasi tuote ja mihin oikein olet sen säilönyt.
            Näin kohtaat tilanteita,
            joissa huomaat ostaneensi kolmannen paketin samoja paristoja tai harvoin
            käyttössä olevaa, mutta toki tarpeellista riisiviinaetikkaa, huomattavasti harvemmin.
              <br />
              <br />
            Sivustolla voit myös pitää kirjaa käytettymiesi kulutushyödykkeiden
            menekistä. Lisäksi, jos merkitset palveluun tuotteittesi parasta ennen päiväyksen,
            sovellus
            muistuttaa sinua tuotteen vanhenemisesta.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={12} />
      </Grid>
    );
  }
}

export default Home;
