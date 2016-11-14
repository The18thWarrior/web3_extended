var Web3 = require('web3');
var web3 = new Web3();
var  net = require('net');

exports.create = create;

function create(options) {
	if(options.ipc){
		var client = new net.Socket();
		web3.setProvider(new web3.providers.IpcProvider(options.host,client));
	}
	else{
		web3.setProvider(new web3.providers.HttpProvider(options.host));
	}
	if (options.personal) {
		web3._extend({
		  property: 'personal',
		  methods: [new web3._extend.Method({
		       name: 'unlockAccount',
		       call: 'personal_unlockAccount',
		       params: 3,
		       inputFormatter: [web3._extend.utils.toAddress, toStringVal, toIntVal],
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'personal',
		  methods: [new web3._extend.Method({
		       name: 'newAccount',
		       call: 'personal_newAccount',
		       params: 1,
		       inputFormatter: [toStringVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'personal',
		  methods: [new web3._extend.Method({
		       name: 'listAccounts',
		       call: 'personal_listAccounts',
		       params: 0,
		       outputFormatter: toJSONObject
		  })]
		});

		web3._extend({
		  property: 'personal',
		  methods: [new web3._extend.Method({
		       name: 'deleteAccount',
		       call: 'personal_deleteAccount',
		       params: 2,
		       inputFormatter: [web3._extend.utils.toAddress, toStringVal],
		       outputFormatter: toBoolVal
		  })]
		});
		
		web3._extend({
		  property: 'personal',
		  methods: [new web3._extend.Method({
		       name: 'importRawKey',
		       call: 'personal_importRawKey',
		       params: 1,
		       inputFormatter: [toStringVal],
		       outputFormatter: web3._extend.utils.toAddress
		  })]
		});
	}

	if (options.admin) {
		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'chainSyncStatus',
		       call: 'admin_chainSyncStatus',
		       params: 0,
		       outputFormatter: toJSONObject
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'verbosity',
		       call: 'admin_verbosity',
		       params: 1,
		       inputFormatter: [toIntValRestricted]
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'nodeInfo',
		       call: 'admin_nodeInfo',
		       params: 0,
		       outputFormatter: toJSONObject
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'addPeer',
		       call: 'admin_addPeer',
		       params: 1,
		       inputFormatter: [toStringVal],
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'peers',
		       call: 'admin_peers',
		       params: 0,
		       outputFormatter: toJSONObject
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'startRPC',
		       call: 'admin_startRPC',
		       params: 4,
		       inputFormatter: [toStringVal, toIntVal, toStringVal, toStringVal],
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'stopRPC',
		       call: 'admin_stopRPC',
		       params: 0,
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'sleepBlocks',
		       call: 'admin_sleepBlocks',
		       params: 1,
		       inputFormatter: [toIntVal]
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'datadir',
		       call: 'admin_datadir',
		       params: 0,
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'setSolc',
		       call: 'admin_setSolc',
		       params: 1,
		       inputFormatter: [toStringVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'startNatSpec',
		       call: 'admin_startNatSpec',
		       params: 0
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'stopNatSpec',
		       call: 'admin_stopNatSpec',
		       params: 0
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: '',
		       call: 'admin_',
		       params: 0,
		       inputFormatter: [web3._extend.utils.toAddress, toStringVal, toIntVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'getContractInfo',
		       call: 'admin_getContractInfo',
		       params: 1,
		       inputFormatter: [web3._extend.utils.toAddress],
		       outputFormatter: toJSONObject
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'saveInfo',
		       call: 'admin_saveInfo',
		       params: 0,
		       inputFormatter: [toJSONObject, toStringVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'register',
		       call: 'admin_register',
		       params: 3,
		       inputFormatter: [web3._extend.utils.toAddress, web3._extend.utils.toAddress, toStringVal],
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'admin',
		  methods: [new web3._extend.Method({
		       name: 'registerUrl',
		       call: 'admin_registerUrl',
		       params: 3,
		       inputFormatter: [web3._extend.utils.toAddress, toStringVal, toStringVal],
		       outputFormatter: toBoolVal
		  })]
		});

	}

	if (options.debug) {
		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'setHead',
		       call: 'debug_setHead',
		       params: 1,
		       inputFormatter: [toIntVal],
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'seedHash',
		       call: 'debug_seedHash',
		       params: 1,
		       inputFormatter: [toIntVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'processBlock',
		       call: 'debug_processBlock',
		       params: 1,
		       inputFormatter: [toIntVal],
		       outputFormatter: toBoolVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'getBlockRlp',
		       call: 'debug_getBlockRlp',
		       params: 1,
		       inputFormatter: [toIntVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'printBlock',
		       call: 'debug_printBlock',
		       params: 1,
		       inputFormatter: [toIntVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'dumpBlock',
		       call: 'debug_dumpBlock',
		       params: 1,
		       inputFormatter: [toIntVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'metrics',
		       call: 'debug_metrics',
		       params: 1,
		       inputFormatter: [toBoolVal],
		       outputFormatter: toStringVal
		  })]
		});

		web3._extend({
		  property: 'debug',
		  methods: [new web3._extend.Method({
		       name: 'traceTransaction',
		       call: 'debug_traceTransaction',
		       params: 1
		  })]
		});
	}
	if(options.testrpc){
		web3._extend({
			property: 'evm',
			methods: [new web3._extend.Method({
				name: 'snapshot',
				call: 'evm_snapshot',
				params: 0,
				outputFormatter: toIntVal
			})]
		});

		web3._extend({
			property: 'evm',
			methods: [new web3._extend.Method({
				name: 'revert',
				call: 'evm_revert',
				params: 1,
				inputFormatter: [toIntVal]
			})]
		});
	}

	if(options.miner){
		web3._extend({
			property: 'miner',
			methods: [
				new web3._extend.Method({
					name: "hashrate",
					call: "miner_hashrate",
					params: 0,
					outputFormatter: toIntVal
			}),
				new web3._extend.Method({
					name: 'makeDAG',
					call: 'miner_makeDAG',
					params: 1,
					inputFormatter: [toIntVal],
					outputFormatter: toBoolVal
			}),

				new web3._extend.Method({
					name: 'setExtra',
					call: 'miner_setExtra',
					params: 1,
					inputFormatter: [toStringVal],
					outputFormatter: toBoolVal
				}),

				new web3._extend.Method({
					name: 'setGasPrice',
					call : 'miner_setGasPrice',
					params: 1,
					inputFormatter: [toIntVal],
					outputFormatter: toBoolVal
				}),

				new web3._extend.Method({
					name: 'start',
					call: 'miner_start',
					params: 1,
					inputFormatter: [toIntVal],
					outputFormatter: toBoolVal
				}),

				new web3._extend.Method({
					name: 'stop',
					call: 'miner_stop',
					params: 1,
					inputFormatter: [toIntVal],
					outputFormatter: toBoolVal
				}),

				new web3._extend.Method({
					name: 'startAutoDAG',
					call: 'miner_startAutoDAG',
					params: 1,
					inputFormatter: [toIntVal],
					outputFormatter: toBoolVal
				}),

				new web3._extend.Method({
					name: 'stopAutoDAG',
					call: 'miner_stopAutoDAG',
					params: 1,
					inputFormatter: [toIntVal],
					outputFormatter: toBoolVal
				}),
			]
		})
	}

	function toStringVal(val) {
		return String(val);
	}

	function toBoolVal(val) {
		console.log(val);
		if (String(val) == 'true') {
			return true;
		} else {
			return false;
		}
	}

	function toIntVal(val) {
		return parseInt(val);
	}

	function toIntValRestricted(val) {
		var check = parseInt(val);
		if (check > 0 && check <= 6) {
			return check;
		} else {
			return null;
		}

	}

	function toJSONObject(val) {
		try {
			if (typeof(val) === "object") return val;
			return JSON.parse(val);
		} catch (e){
			return String(val);
		}
	}

	return web3;
}
