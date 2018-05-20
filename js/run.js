// code.js中将run按钮的点击事件与Code.runPY绑定
Code.runPY = function(){
    var code = Blockly.Python.workspaceToCode(Code.workspace);

    $.post(
        "/do_run",
        {
            "code": code
        },
        function(result){
            alert(result);
        }
    );
};