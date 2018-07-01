var timer = null;
var END_STRING = '----------- End -----------';  // 跟python中的定义统一
var KILLED_STRING = '----------- Killed -----------';

// code.js中将run按钮的点击事件与Code.runPY绑定
Code.runPY = function(){
    var code = Blockly.Python.workspaceToCode(Code.workspace);
    $("#modal-close").css("display", "none");
    $(".modal-body").text("正在上传程序…………");

    $.post(
        "/do_run",
        {
            "code": code
        },
        function(result){
            $(".modal-body").append(result + "</br></br>");
            if(result == "ok"){
                timer = setInterval(function(){
                    $.get(
                        "/get_running_state",
                        function(result){
                            $(".modal-body").append(result);
                            if(result.indexOf(END_STRING) != -1){
                                $("#modal-close").css("display", "inline");
                                clearInterval(timer);
                            }
                        }
                    )
                }, 2000)
            }
        }
    );
};

Code.killProgram = function(){
    $.get(
        "/kill_program",
        function(result){
            $(".modal-body").append(KILLED_STRING);
            $("#modal-close").css("display", "inline");
            if(timer) clearInterval(timer);
        }
    )
};