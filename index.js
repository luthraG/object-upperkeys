var NODE_RATIFY = require('node-ratify');

function toUppercaseKeys(obj, deep) {
    var retObj;
    if (NODE_RATIFY.isObject(obj)) {
        retObj = {};

        // Get the object keys
        var objKeys = Object.keys(Object(obj));

        for (var idx = 0; idx < objKeys.length; idx++) {
            if (deep && NODE_RATIFY.isObject(obj[objKeys[idx]])) {
                retObj[objKeys[idx].toUpperCase()] = toUppercaseKeys(obj[objKeys[idx]], deep);
            } else {
                retObj[objKeys[idx].toUpperCase()] = obj[objKeys[idx]];
            }
        }
    } else {
        retObj = obj;
    }

    return retObj;
}

exports = module.exports = {
    toUpperCaseKeys      : function (obj, opts) {
        if (!opts || !NODE_RATIFY.isObject(opts))
            opts = {
                deep : false
            };

        var retObj,
            deep = opts['deep'];

        retObj = toUppercaseKeys(obj, deep);

        return retObj;
    }
};