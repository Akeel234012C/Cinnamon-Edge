import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_RESTAURANT_CONFIG,
  INITIAL_VERIFIED_MENU_ITEMS,
  MENU_CATEGORIES,
  GALLERY_ITEMS,
  formatAudPrice,
  filterMenuByCategory,
  filterGalleryByCategory,
  getCombinedMenuItems,
  hasExternalBookingPlatform,
  validateNewMenuItemInput,
} from './restaurant-data';

test('verified business details match specification exactly', () => {
  assert.equal(DEFAULT_RESTAURANT_CONFIG.businessName, 'Cinnamon Edge');
  assert.equal(DEFAULT_RESTAURANT_CONFIG.streetAddress, 'Shop 6/742 Creek Road');
  assert.equal(DEFAULT_RESTAURANT_CONFIG.suburb, 'Mount Gravatt East');
  assert.equal(DEFAULT_RESTAURANT_CONFIG.state, 'QLD');
  assert.equal(DEFAULT_RESTAURANT_CONFIG.postcode, '4122');
  assert.equal(DEFAULT_RESTAURANT_CONFIG.phoneDisplay, '+61 415 735 617');
  assert.equal(
    DEFAULT_RESTAURANT_CONFIG.googleMapsUrl,
    'https://maps.app.goo.gl/ceQtifPvpuMjhWCP7'
  );
  assert.equal(
    DEFAULT_RESTAURANT_CONFIG.openingHoursText,
    'Please contact us for current opening hours.'
  );
  assert.equal(DEFAULT_RESTAURANT_CONFIG.bookingPlatformUrl, '');
  assert.equal(hasExternalBookingPlatform(''), false);
  assert.equal(
    hasExternalBookingPlatform('https://www.opentable.com.au/cinnamon-edge'),
    true
  );
});

test('all 9 menu categories exist and only verified categories have initial items', () => {
  assert.deepEqual(MENU_CATEGORIES, [
    'Starters',
    'Hoppers',
    'Kottu',
    'Fried Rice',
    'Noodles',
    'Devilled',
    'Drinks',
    'Milkshakes',
    'Desserts',
  ]);

  const starters = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Starters');
  const hoppers = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Hoppers');
  const kottu = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Kottu');
  const friedRice = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Fried Rice');
  const noodles = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Noodles');
  const devilled = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Devilled');
  const drinks = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Drinks');
  const milkshakes = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Milkshakes');
  const desserts = filterMenuByCategory(INITIAL_VERIFIED_MENU_ITEMS, 'Desserts');

  assert.equal(starters.length, 4);
  assert.equal(hoppers.length, 2);
  assert.equal(kottu.length, 3);
  assert.equal(friedRice.length, 6);

  // Unconfirmed categories must not have invented items
  assert.equal(noodles.length, 0);
  assert.equal(devilled.length, 0);
  assert.equal(drinks.length, 0);
  assert.equal(milkshakes.length, 0);
  assert.equal(desserts.length, 0);
});

test('verified prices match AUD specification', () => {
  const priceMap = new Map(
    INITIAL_VERIFIED_MENU_ITEMS.map((item) => [item.name, formatAudPrice(item.priceAud)])
  );
  assert.equal(priceMap.get('Fish Rolls (2 pcs)'), '$11.50');
  assert.equal(priceMap.get('Chicken Rolls (2 pcs)'), '$11.50');
  assert.equal(priceMap.get('Mutton Roll'), '$15.00');
  assert.equal(priceMap.get('Vegetable Samosas (4 pcs)'), '$10.00');
  assert.equal(priceMap.get('3 Plain Hoppers'), '$18.90');
  assert.equal(priceMap.get('2 Plain Hoppers + 2 Egg Hoppers'), '$25.50');
  assert.equal(priceMap.get('Chicken & Cheese Kottu'), '$30.90');
  assert.equal(priceMap.get('Chicken String Hoppers Kottu'), '$31.90');
  assert.equal(priceMap.get('Vegetable Kottu'), '$24.90');
  assert.equal(priceMap.get('Cinnamon Edge Special Fried Rice'), '$36.90');
  assert.equal(priceMap.get('Chicken Fried Rice'), '$27.90');
  assert.equal(priceMap.get('Vegetable Fried Rice'), '$24.90');
  assert.equal(priceMap.get('Egg Fried Rice'), '$26.90');
  assert.equal(priceMap.get('Pork Fried Rice'), '$29.90');
  assert.equal(priceMap.get('Prawns Fried Rice'), '$31.90');
});

test('validateNewMenuItemInput validates owner custom menu additions', () => {
  const emptyName = validateNewMenuItemInput({
    name: '   ',
    priceText: '18.50',
    category: 'Noodles',
    description: '',
  });
  assert.equal(emptyName.valid, false);

  const invalidPrice = validateNewMenuItemInput({
    name: 'Chicken Fried Noodles',
    priceText: '-5',
    category: 'Noodles',
    description: '',
  });
  assert.equal(invalidPrice.valid, false);

  const validAddition = validateNewMenuItemInput({
    name: 'Sri Lankan Devilled Chicken',
    priceText: '28.90',
    category: 'Devilled',
    description: 'Wok-tossed chicken with capsicum and chili sauce.',
  });
  assert.equal(validAddition.valid, true);
  if (validAddition.valid) {
    const combined = getCombinedMenuItems([validAddition.item]);
    const devilledItems = filterMenuByCategory(combined, 'Devilled');
    assert.equal(devilledItems.length, 1);
    assert.equal(formatAudPrice(devilledItems[0].priceAud), '$28.90');
  }
});

test('filterGalleryByCategory filters across all gallery categories', () => {
  const all = filterGalleryByCategory(GALLERY_ITEMS, 'All');
  assert.equal(all.length, 6);

  const hoppersOnly = filterGalleryByCategory(GALLERY_ITEMS, 'Hoppers');
  assert.equal(hoppersOnly.length, 1);
  assert.equal(hoppersOnly[0].category, 'Hoppers');
});
