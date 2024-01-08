/**
 * Sort array of objects based on another array
 */

const mapOrder = (array, order, key) => {
  if (!array || !order || !key) return array;

  return array.toSorted((a, b) => {
    return order.indexOf(a[key]) > order.indexOf(b[key]) ? 1 : -1;
  });
};


/** test */
const item_array = [ 
  { id: 2, label: 'Two' }
, { id: 3, label: 'Three' }
, { id: 5, label: 'Five' }
, { id: 4, label: 'Four' }
, { id: 1, label: 'One'}
];

const item_order = [1,2,3,4,5];

const ordered_array = mapOrder(item_array, item_order, 'id');

console.log('Ordered:', JSON.stringify(ordered_array));