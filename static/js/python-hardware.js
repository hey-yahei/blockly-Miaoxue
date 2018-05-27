'use strict';

goog.provide('Blockly.Python.hardware');

goog.require('Blockly.Python');

Blockly.Python['hardware_digital_value'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getFieldValue('VALUE');
    return [arg1, Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python['hardware_pin_mode'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getFieldValue('MODE');
    return "pin_mode(" + arg1 + "," + arg2 + ")\n";
};

Blockly.Python['hardware_digital_write'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getFieldValue('VALUE');
    return "digital_write(" + arg1 + "," + arg2 + ")\n";
};

/* // 两个读引脚模块合并为hardware_readpin模块（2018-05-13）
Blockly.Python['hardware_digitalread'] = function(block) {
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return ["digital_read(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['hardware_analogread'] = function(block) {
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return ["analog_read(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};
*/
Blockly.Python['hardware_digital_read'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return ["digital_read(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_analog_read'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return ["analog_read(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_pwm_get_max_level'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return ["pwm_get_max_level(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_pwm_duty2level'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getField('DUTY') ? 
                String(parseInt(block.getFieldValue('DUTY'), 10)) : 
                Blockly.Python.valueToCode(block, 'DUTY', Blockly.Python.ORDER_NONE) || '0';
    return ["pwm_duty2level(" + arg1 + "," + arg2 + ")", Blockly.Python.ORDER_ATOMIC];
};

/* // 丢弃单独的占空比、频率设置模块；统一使用hardware_set模块（2018-05-13）
Blockly.Python['hardware_pwmsetlevel'] = function(block) {
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getField('LEVEL') ? 
                String(parseInt(block.getFieldValue('LEVEL'), 10)) : 
                Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_NONE) || '0';
    return "pwm_set_level(" + arg1 + "," + arg2 + ")\n";
};
Blockly.Python['hardware_pwmsetfreq'] = function(block) {
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getField('FREQ') ? 
                String(parseInt(block.getFieldValue('FREQ'), 10)) : 
                Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_NONE) || '0';
    return "pwm_set_freq(" + arg1 + "," + arg2 + ")\n";
};
*/

Blockly.Python['hardware_pwm_set'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getField('LEVEL') ? 
                String(parseInt(block.getFieldValue('LEVEL'), 10)) : 
                Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_NONE) || '0';
    var arg3 = block.getFieldValue('TYPE');
    var arg4 = block.getField('FREQ') ? 
                String(parseInt(block.getFieldValue('FREQ'), 10)) : 
                Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_NONE) || '0';
    if(arg3 == 'level')
        return "pwm_set(" + arg1 + "," + arg2 + "," + arg4 + ")\n";
    else
        return "pwm_set(" + arg1 + ", pwm_duty2level(" + arg1 + "," + arg2 + ") ," + arg4 + ")\n";
};


/* // 合并pwm的使能和使能模块为hardware_pwmswitch模块（2018-05-13）
Blockly.Python['hardware_pwmenable'] = function(block) {
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return "pwm_enable(" + arg1  + ")\n";
};
Blockly.Python['hardware_pwmdisable'] = function(block) {
    var arg1 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return "pwm_disable(" + arg1  + ")\n";
};
*/
Blockly.Python['hardware_pwm_switch'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getFieldValue('OP');
    var arg2 = block.getField('PIN') ? 
                String(parseInt(block.getFieldValue('PIN'), 10)) : 
                Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || '0';
    return arg1 + "(" + arg2  + ")\n";
};

Blockly.Python['hardware_serial_init'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";

    var arg1 = block.getField('BAUD') ? 
                String(parseInt(block.getFieldValue('BAUD'), 10)) : 
                Blockly.Python.valueToCode(block, 'BAUD', Blockly.Python.ORDER_NONE) || '0';
    Blockly.Python.definitions_["serial"] = "pcduino_serial = Serial(" + arg1 + ")";

    return "";
};

Blockly.Python['hardware_serial_read_string'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";

    var arg1 = block.getField('LEN') ? 
                String(parseInt(block.getFieldValue('LEN'), 10)) : 
                Blockly.Python.valueToCode(block, 'LEN', Blockly.Python.ORDER_NONE) || '0';

    return ["pcduino_serial.read_string(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_serial_read_bytes'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";

    var arg1 = block.getField('LEN') ? 
                String(parseInt(block.getFieldValue('LEN'), 10)) : 
                Blockly.Python.valueToCode(block, 'LEN', Blockly.Python.ORDER_NONE) || '0';

    return ["pcduino_serial.read_bytes(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_serial_read_all'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";

    return ["pcduino_serial.read_all()", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_serial_write_string'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('STRING') ? 
                String(parseInt(block.getFieldValue('STRING'), 10)) : 
                Blockly.Python.valueToCode(block, 'STRING', Blockly.Python.ORDER_NONE) || '0';

    return "pcduino_serial.write_string(" + arg1 + ")\n";
};

Blockly.Python['hardware_serial_write_bytes'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";
    var arg1 = block.getField('DATA') ? 
                String(parseInt(block.getFieldValue('DATA'), 10)) : 
                Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE) || '0';
    var arg2 = block.getField('LEN') ? 
                String(parseInt(block.getFieldValue('LEN'), 10)) : 
                Blockly.Python.valueToCode(block, 'LEN', Blockly.Python.ORDER_NONE) || '0';

    return "pcduino_serial.write_bytes(" + arg1 + ", " + arg2 + ")\n";
};

Blockly.Python['hardware_serial_clear'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";

    var arg1 = block.getFieldValue('TYPE');

    return "pcduino_serial." + arg1 + "()\n";
}

Blockly.Python['hardware_serial_get_buffer_length'] = function(block) {
    Blockly.Python.definitions_["import_pcduino"] = "from pcduino import *";

    var arg1 = block.getFieldValue('TYPE');

    return ["pcduino_serial." + arg1 + "()", Blockly.Python.ORDER_ATOMIC];
}