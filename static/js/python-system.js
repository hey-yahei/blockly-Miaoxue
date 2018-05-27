'use strict';

goog.provide('Blockly.Python.system');

goog.require('Blockly.Python');

Blockly.Python['system_get_time'] = function(block) {
    Blockly.Python.definitions_["import_time"] = "import time";

    return ["time.time()", Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python['system_sleep'] = function(block) {
    Blockly.Python.definitions_["import_time"] = "import time";
    var arg1 = block.getField('VALUE') ? 
                String(parseInt(block.getFieldValue('VALUE'), 10)) : 
                Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '0';

    return "time.sleep(" + arg1 + ")\n";
};