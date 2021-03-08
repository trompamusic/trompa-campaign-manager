module.exports = {
  compositionModalLocators: {
    selectCompositionModal: 'button[data-test-id=select-composition-modal]',
    headerInitialResults  : '//h6[contains(text(), "50 results")]',
    firstSearchResult     : 'div[data-test-id=first-search-result]',
  },
  ariaLabel: label => ({ css: `[aria-label=${label}]` }),
  firstItem: (locate, item) => (locate(item).first()),
};