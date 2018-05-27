'use strict';

goog.provide('Blockly.Blocks.system');  // Deprecated
goog.provide('Blockly.Constants.System');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['system_get_time'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_SYSTEM_GET_TIME}',
      "output": "Number",
      "colour": "%{BKY_SYSTEM_COLOUR}",
      "tooltip": "%{BKY_SYSTEM_GET_TIME_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['system_sleep'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_SYSTEM_SLEEP}',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "output": null,
      "colour": "%{BKY_SYSTEM_COLOUR}",
      "tooltip": "%{BKY_SYSTEM_SLEEP_TOOLTIP}",
      "helpUrl": ""
    });
  }
};