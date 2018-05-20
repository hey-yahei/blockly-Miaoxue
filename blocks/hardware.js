'use strict';

goog.provide('Blockly.Blocks.hardware');  // Deprecated
goog.provide('Blockly.Constants.Hardware');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['hardware_pinmode'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PINMODE}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "MODE",
          "options": [
            ["%{BKY_HARDWARE_INPUT}", "INPUT"],
            ["%{BKY_HARDWARE_OUTPUT}", "OUTPUT"],
            ["PWM", "PWM"],
            ["UART", "UART"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      // "output": null,
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

Blockly.Blocks['hardware_digitalwrite'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_HARDWARE_DIGITALWRITE}",
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ["%{BKY_HARDWARE_HIGH}", "HIGH"],
            ["%{BKY_HARDWARE_LOW}", "LOW"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

/* // 两个读引脚模块合并为hardware_readpin模块（2018-05-13）
Blockly.Blocks['hardware_digitalread'] = {
  init: function() {
    this.jsonInit({
      "message0": 'read digital pin %1',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Boolean",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
Blockly.Blocks['hardware_analogread'] = {
  init: function() {
    this.jsonInit({
      "message0": 'read analog pin %1',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
*/
Blockly.Blocks['hardware_digitalread'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_DIGITALREAD}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Boolean",
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

Blockly.Blocks['hardware_analogread'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_ANALOGREAD}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

Blockly.Blocks['hardware_pwmgetmaxlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PWMGETMAXLEVEL}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

Blockly.Blocks['hardware_pwmduty2level'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PWMDUTY2LEVEL}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DUTY",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

/* // 丢弃单独的占空比、频率设置模块；统一使用hardware_set模块（2018-05-13）
Blockly.Blocks['hardware_pwmsetlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": 'set level for pwm %1 as %2',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "LEVEL",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
Blockly.Blocks['hardware_pwmsetfreq'] = {
  init: function() {
    this.jsonInit({
      "message0": 'set freq for pwm %1 as %2',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "FREQ",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
*/

Blockly.Blocks['hardware_pwmset'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PWM_SET}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "FREQ",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            ["%{BKY_HARDWARE_LEVEL}", "level"],
            ["%{BKY_HARDWARE_DUTY}(%)", "duty"]
          ]
        },
        {
          "type": "input_value",
          "name": "LEVEL",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

/* // 合并pwm的使能和使能模块为hardware_pwmswitch模块（2018-05-13）
Blockly.Blocks['hardware_pwmdisable'] = {
  init: function() {
    this.jsonInit({
      "message0": 'disable pwm %1',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
Blockly.Blocks['hardware_pwmenable'] = {
  init: function() {
    this.jsonInit({
      "message0": 'enable pwm %1',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
*/
Blockly.Blocks['hardware_pwmswitch'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PWM_SWITCH}',
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            ["%{BKY_HARDWARE_ENABLE}", "pwm_enable"],
            ["%{BKY_HARDWARE_DISABLE}", "pwm_disable"]
          ]
        },
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": 360,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};