'use strict';

goog.provide('Blockly.Python.hardware');

goog.require('Blockly.Python');

Blockly.Python['hardware_pinmode'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    var arg2 = block.getFieldValue('MODE');
    return "pin_mode(" + arg1 + "," + arg2 + ")\n";
};

Blockly.Python['hardware_digitalwrite'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    var arg2 = block.getFieldValue('VALUE');
    return "digital_write(" + arg1 + "," + arg2 + ")\n";
};

Blockly.Python['hardware_digitalread'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    return ["digital_read(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_analogread'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    return ["analog_read(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_pwmgetmaxlevel'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    return ["pwm_get_max_level(" + arg1 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_pwmduty2level'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    var arg2 = block.getFieldValue('DUTY');
    return ["pwm_duty2level(" + arg1 + "," + arg2 + ")", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hardware_pwmsetlevel'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    var arg2 = block.getFieldValue('LEVEL');
    return "pwm_set_level(" + arg1 + "," + arg2 + ")\n";
};

Blockly.Python['hardware_pwmsetfreq'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    var arg2 = block.getFieldValue('FREQ');
    return "pwm_set_freq(" + arg1 + "," + arg2 + ")\n";
};

Blockly.Python['hardware_pwmset'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    var arg2 = block.getFieldValue('LEVEL');
    var arg3 = block.getFieldValue('FREQ');
    return "pwm_set(" + arg1 + "," + arg2 + "," + arg3 + ")\n";
};

Blockly.Python['hardware_pwmenable'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    return "pwm_enable(" + arg1  + ")\n";
};

Blockly.Python['hardware_pwmdisable'] = function(block) {
    // var arg1 =  Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE) || null;
    var arg1 = block.getFieldValue('PIN');
    return "pwm_disable(" + arg1  + ")\n";
};