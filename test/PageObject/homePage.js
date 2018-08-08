import { Selector } from 'testcafe'

export default class NatGeoPage {
  constructor () {
    this.tvPackage = Selector('mt_promotile__footer');
  }
}