const blend = require('./plugins/blend');
const flexBasis = require('./plugins/flex-basis');
const groupFocus = require('./plugins/group-focus');
const parentExpanded = require('./plugins/parent-expanded');
const parentOpen = require('./plugins/parent-open');
const rect = require('./plugins/rect');

module.exports = [
  blend,
  flexBasis,
  groupFocus,
  parentExpanded,
  parentOpen,
  rect,
];
