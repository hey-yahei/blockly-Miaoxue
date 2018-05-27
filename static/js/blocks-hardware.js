'use strict';

goog.provide('Blockly.Blocks.hardware');  // Deprecated
goog.provide('Blockly.Constants.Hardware');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['hardware_digital_value'] = {
  init: function() {
    this.jsonInit({
      "message0": '%1',
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ["%{BKY_HARDWARE_HIGH}", "HIGH"],
            ["%{BKY_HARDWARE_LOW}", "LOW"],
          ]
        }
      ],
      "output": "Boolean",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_DIGITAL_VALUE_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_pin_mode'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PIN_MODE}',
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
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_PIN_MODE_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_digital_write'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_HARDWARE_DIGITAL_WRITE}",
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
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_DIGITAL_WRITE_TOOLTIP}",
      "helpUrl": ""
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
      "tooltip": "%{BKY_HARDWARE__TOOLTIP}",
      "helpUrl": ""
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
      "tooltip": "%{BKY_HARDWARE__TOOLTIP}",
      "helpUrl": ""
    });
  }
};
*/
Blockly.Blocks['hardware_digital_read'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_DIGITAL_READ}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Boolean",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_DIGITAL_READ_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_analog_read'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_ANALOG_READ}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_ANALOG_READ_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_pwm_get_max_level'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PWM_GET_MAX_LEVEL}',
      "args0": [
        {
          "type": "input_value",
          "name": "PIN",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_PWM_GET_MAX_LEVEL_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_pwm_duty2level'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_PWM_DUTY2LEVEL}',
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
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_PWM_DUTY2LEVEL_TOOLTIP}",
      "helpUrl": ""
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
      "tooltip": "%{BKY_HARDWARE__TOOLTIP}",
      "helpUrl": ""
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
      "tooltip": "%{BKY_HARDWARE__TOOLTIP}",
      "helpUrl": ""
    });
  }
};
*/

Blockly.Blocks['hardware_pwm_set'] = {
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
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_PWM_SET_TOOLTIP}",
      "helpUrl": ""
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
      "tooltip": "%{BKY_HARDWARE__TOOLTIP}",
      "helpUrl": ""
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
      "tooltip": "%{BKY_HARDWARE__TOOLTIP}",
      "helpUrl": ""
    });
  }
};
*/
Blockly.Blocks['hardware_pwm_switch'] = {
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
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_PWM_SWITCH_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_init'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_INIT}',
      "args0": [
        {
          "type": "input_value",
          "name": "BAUD",
          "check": "Number"
        },
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_INIT_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_read_string'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_READ_STRING}',
      "args0": [
        {
          "type": "input_value",
          "name": "LEN",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "output": "String",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_READ_STRING_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_read_bytes'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_READ_BYTES}',
      "args0": [
        {
          "type": "input_value",
          "name": "LEN",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "output": "Number",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_READ_BYTES_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_read_all'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_READ_ALL}',
      "inputsInline": true,   // 不换行
      "output": "String",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_READ_ALL_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_write_string'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_WRITE_STRING}',
      "args0": [
        {
          "type": "input_value",
          "name": "STRING",
          "check": "String"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SEIRAL_WRITE_STRING_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_write_bytes'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_WRITE_BYTES}',
      "args0": [
        {
          "type": "input_value",
          "name": "DATA",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "LEN",
          "check": "Number"
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_WRITE_BYTES_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_clear'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_CLEAR}',
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            ["%{BKY_HARDWARE_SERIAL_IN}", "in_flush"],
            ["%{BKY_HARDWARE_SERIAL_OUT}", "out_flush"]
          ]
        }
      ],
      "inputsInline": true,   // 不换行
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_CLEAR_TOOLTIP}",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['hardware_serial_get_buffer_length'] = {
  init: function() {
    this.jsonInit({
      "message0": '%{BKY_HARDWARE_SERIAL_GET_BUFFER_LENGTH}',
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            ["%{BKY_HARDWARE_SERIAL_IN}", "in_waiting"],
            ["%{BKY_HARDWARE_SERIAL_OUT}", "out_waiting"]
          ]
        }
      ],
      "inputsInline": true,   // 不换行
      "output": "Number",
      "colour": "%{BKY_HARDWARE_COLOUR}",
      "tooltip": "%{BKY_HARDWARE_SERIAL_GET_BUFFER_LENGTH_TOOLTIP}",
      "helpUrl": ""
    });
  }
};