import NatGeoPage from '../../PageObject/homePage';
require('dotenv').config();

const natGeoPage = new NatGeoPage();

fixture`My fixture`
.page(`${process.env.WEBPAGE}`);

test('Empty', async t => {
  //await t
});
/*
* Go to tv package module
* 
*/