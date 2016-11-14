# web3_ipc


A simple extension of the web3 interface to access the Management API. 

## Installation

``` bash
  $ npm install web3_ipc --save
  
  or 
  
  $ git clone https://github.com/tjade273/web3_extended.git && npm install
```

## Usage
Call just as you would normal web3. There is an options object to include. The currently implemented interfaces are personal, admin, and debug. Follows the same function arguments as the Javascript Console reference: [here][0]. Management API docs are [here][1].


Use the `ipc` option to use IPC instead of RPC

**Note:** The security of this module has not been tested. Ideal for working inside a private network or testnet. 

**Example of RPC Connection**
```
var web3_extended = require('web3_extended');

var options = {
  host: 'http://localhost:8545',
  ipc:false,
  personal: true, 
  admin: true,
  debug: false
};
var web3 = web3_extended.create(options);

var datadir = web3.admin.datadir();
//'/Users/username/Library/Ethereum'
```

**Example of IPC Connection**

**Note: IPC requests must be asynchronous**

```
var web3_extended = require('web3_extended');

var options = {
  host: '/Users/username/Library/Ethereum/geth.ipc',
  ipc:true,
  personal: true, 
  admin: true,
  debug: false
};
var web3 = web3_extended.create(options);

var datadir = web3.admin.datadir(function(error,result){
  if(!error){
    console.log(result);
  }
});
//'/Users/username/Library/Ethereum'
```

## Tests

No tests are included

#### License: MIT
#### Authors: [Jordan Paul](https://github.com/The18thWarrior), [Tjaden Hess](https://github.com/tjade273)

[0]: https://github.com/ethereum/go-ethereum/wiki/JavaScript-Console#admin
[1]: https://github.com/ethereum/go-ethereum/wiki/Management-APIs#personal_importrawkey
