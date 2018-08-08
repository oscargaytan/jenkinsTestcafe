import NatGeoPage from '../PageObject/homePage';

const natGeoPage = new NatGeoPage();

fixture`My fixture`
.page(`https://www.nationalgeographic.com/`);

test('good', async t => {
  await t
    //.scroll(natGeoPage.tvPackage)
    .click(natGeoPage.tvPackage);
});