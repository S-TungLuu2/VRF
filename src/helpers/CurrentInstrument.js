/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import BigNumber from 'bignumber.js';
import store from 'src/store/store.ts';

let currentInstrument = store.getState().instrument.currentInstrument;

store.subscribe(() => {
  currentInstrument = store.getState().instrument.currentInstrument;
});

export default {
  getMultipler: function () {
    return currentInstrument.multiplier;
  },

  //TODO not have
  getMarkPrice: function () {
    return currentInstrument.mark_price;
  },

  getInitMarginRatio: function () {
    return new BigNumber(`${currentInstrument.initMargin || 0}`).toString();
  },

  getMaintMarginRatio: function () {
    return new BigNumber(`${currentInstrument.maintainMargin || 0}`).toString();
  },

  getTakerFee: function () {
    return new BigNumber(`${currentInstrument.takerFee || 0}`).toString();
  },

  //TODO not have
  getFundingRate: function () {
    return new BigNumber(`${currentInstrument.funding_rate || 0}`).toString();
  },

  getMaxQuanity: function () {
    return new BigNumber(`${currentInstrument.maxOrderQty || 0}`).toString();
  },
};
