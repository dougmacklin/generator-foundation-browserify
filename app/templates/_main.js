global.$       = global.jQuery = require('jquery');
var foundation = <% if (props.foundationVersion === 'Foundation 6') { %>require('../../node_modules/foundation-sites/dist/js/foundation.js');<% } else { %>require('foundation');<% } %>

$(document).foundation();
