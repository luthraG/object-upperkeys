# object-upperkeys
It provides an API to convert the keys of the object into uppercase. Client of this API can specify if nested keys are also required to be converted to uppercase

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install object-upperkeys --save
```

### Usage

```javascript
var UPPERCASE_KEYS = require('object-upperkeys');

var object = {
    'California' : 'CA',
    'Texas'      : 'TX',
    'new york'   : 'NY' 
};

UPPERCASE_KEYS.toUpperCaseKeys(object);
//=> { 'CALIFORNIA' : 'CA', 'TEXAS' : 'TX', 'NEW YORK' : 'NY' }

var days = {
    'sunday'    : 0,
    'monday'    : 1,
    'tuesday'   : 2,
    'wednesday' : 3
};

UPPERCASE_KEYS.toUpperCaseKeys(days);
//=> { 'SUNDAY': 0, 'MONDAY' : 1, 'TUESDAY' : 2, 'WEDNESDAY' : 3 }

```

### Clone the repo

git clone https://github.com/luthraG/object-upperkeys.git

### API

#### toUpperCaseKeys(obj, [options])

This API takes two parameters:
1. Object whoes keys to be converted to uppercase and 
2. options object. This argument is optional


**Options**

Various options supported by this API are :
- **deep** - To specify if nested keys should also be converted to uppercase. Default is false.

**Example with options**

```javascript
var UPPERCASE_KEYS = require('object-upperkeys');

var days = {
    'Sunday'    : 0,
    'Monday'    : 1,
    'tuesday'   : 2,
    'wednesday' : 3,
    'weekend'  : {
        'Sunday' : 'Fun day',
        'Saturday' : {
            'Code' : {
                'Abbr' : 'sat'
            }
        }
    }
};

UPPERCASE_KEYS.toUpperCaseKeys(days, { deep : true});
//=> { 'SUNDAY': 0, 'MONDAY' : 1, 'TUESDAY' : 2, 'WEDNESDAY' : 3, 'WEEKEND' : 'SUNDAY' : 'Fun day', 'SATURDAY' : { 'CODE' : { 'ABBR' : 'sat' } } }

```

### Related projects

You might also be interested in these projects:

* [object-lowerkeys](https://www.npmjs.com/package/object-lowerkeys): Convert the keys of an object into lowercase. | [homepage](https://github.com/luthraG/object-lowerkeys.git)
* [uppercase-values](https://www.npmjs.com/package/uppercase-values): Convert the values of all the keys of an object into uppercase. | [homepage](https://github.com/luthraG/uppercase-values.git)
* [lowercase-values](https://www.npmjs.com/package/lowercase-values): Convert the values of all the keys of an object into lowercase. | [homepage](https://github.com/luthraG/lowercase-values.git)
* [objectvalues](https://www.npmjs.com/package/objectvalues): To get all the values of an object. It can also fetch the value of nested object of any depth. | [homepage](https://github.com/luthraG/objectvalues.git)

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)
