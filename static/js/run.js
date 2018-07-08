var timer = null;
var END_STRING = '----------- End -----------';  // 跟python中的定义统一
var KILLED_STRING = '----------- Killed -----------';

$(document).ready(function(){
    $.get(
        "/load_states",
        function(result){
            if(result != ""){
                $(".modal").modal("show");
                $("#run-result").text(result);
                $("#modal-close").css("display", "none");
                $("#killProgramButton").removeAttr("disabled");

                timer = setInterval(function(){
                    $.get(
                        "/get_running_state",
                        function(result){
                            $("#run-result").append(result);
                            if(result.indexOf(END_STRING) != -1){
                                $("#modal-close").css("display", "inline");
                                $("#killProgramButton").attr("disabled", "disabled");
                                clearInterval(timer);
                            }
                        }
                    )
                }, 500);
            }
        }
    )
});

// code.js中将run按钮的点击事件与Code.runPY绑定
Code.runPY = function(){
    var code = Blockly.Python.workspaceToCode(Code.workspace);
    $("#modal-close").css("display", "none");
    $("#killProgramButton").attr("disabled", "disabled");
    $("#run-result").text("正在上传程序…………");

    $.post(
        "/do_run",
        {
            "code": code
        },
        function(result){
            $("#run-result").append(result + "\n\n");
            if(result == "ok"){
                $("#killProgramButton").removeAttr("disabled");
                timer = setInterval(function(){
                    $.get(
                        "/get_running_state",
                        function(result){
                            $("#run-result").append(result);
                            if(result.indexOf(END_STRING) != -1){
                                $("#modal-close").css("display", "inline");
                                $("#killProgramButton").attr("disabled", "disabled");
                                clearInterval(timer);
                            }
                        }
                    )
                }, 500);
            }
        }
    );
};

Code.killProgram = function(){
    $.get(
        "/kill_program",
        function(result){
            $("#run-result").append(KILLED_STRING);
            $("#modal-close").css("display", "inline");
            $("#killProgramButton").attr("disabled", "disabled");
            if(timer) clearInterval(timer);
        }
    )
};