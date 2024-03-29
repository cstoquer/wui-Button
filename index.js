var inherits = require('util').inherits;
var buttonBehavior = require('wuiButtonBehavior');
var WuiDom = require('WuiDom');

/**
 * @class
 * @classDesc General button for WUI
 * @augments WuiDom
 *
 * @param {Object} [options] - params to forward to the WuiDom class
 * @param {Function} [action] - on click function for inline setting
 */
function WuiButton(options, action) {
	WuiDom.call(this, 'div', options);

	this.addClassNames('WuiButton');


	buttonBehavior(this);

	if (typeof action === 'function') {
		this.on('tap', action);
	}

	// Register event listener for custom display
	this.on('tapstart', function () {
		this.addClassNames('pressed');
	});

	this.on('tapend', function () {
		this.delClassNames('pressed');
	});

	this.on('disabled', function () {
		this.addClassNames('disabled');
	});

	this.on('enabled', function () {
		this.delClassNames('disabled');
	});

}

inherits(WuiButton, WuiDom);
module.exports = WuiButton;