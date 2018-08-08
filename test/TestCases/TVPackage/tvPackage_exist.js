import NatGeoPage from '../../PageObject/homePage';

const natGeoPage = new NatGeoPage();

fixture`My fixture`
.page(`https://www.nationalgeographic.com/`);

test('Empty', async t => {
  //await t
});
/*
* Go to tv package module
* 
*/