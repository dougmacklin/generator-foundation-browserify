var $          = require('jquery');
var foundation = <% if (props.foundationVersion) { %>require('../../node_modules/foundation-sites/dist/foundation.js');<% } else { %>require('foundation');<% } %>

$(document).foundation();
