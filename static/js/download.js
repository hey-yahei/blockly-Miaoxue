Code.downloadPY = function(){
    var code = Blockly.Python.workspaceToCode(Code.workspace);

    $.post(
        "/download_python_file",
        {
            "code": code
        },
        function(result){
            $("#download_py").click();
        }
    );
}

Code.downloadXML = function(){
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToPrettyText(xmlDom);

    $.post(
        "/download_xml_file",
        {
            "code": text
        },
        function(result){
            $("#download_xml").click();
        }
    );
}

Code.uploadXML = function(){
    $("#xmlfile").click();
}

// 选择好xml文件后调用该函数
function getXml(){
    var files = $('#xmlfile').prop('files');        //获取到文件列表
    var file = files[0];
    var filename = file['name'];
    // 判断是否有选择文件
    if(files.length != 0){
        // 判断后缀名
        var index = filename.lastIndexOf(".");
        var ext = filename.substr(index+1);
        if(ext == 'xml'){
            // 读取文件并加载到工作区
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function(evt){      //读取完文件之后的回调函数
                var text = evt.target.result;   // 读取文件内容
                var xml = Blockly.Xml.textToDom(text);
                Blockly.Xml.domToWorkspace(xml, Code.workspace);
            }
        }else{
            alert("请选择正确的xml文件");
        }
    }
};