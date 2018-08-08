import NatGeoPage from '../PageObject/homePage';
require('dotenv').config();

const natGeoPage = new NatGeoPage();

fixture`My fixture`
.page(`${process.env.WEBPAGE}`);

test('good', async t => {
  await t
    //.scroll(natGeoPage.tvPackage)
    .click(natGeoPage.tvPackage);
});