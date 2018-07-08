# blockly-Miaoxue（beta）
基于google的blockly定制，用于python的可视化编程；       
主要增加pcduino硬件控制相关的模块，借助bottle框架直接运行程序显示结果；     
   
## Windows平台可执行文件
\[2018-07-08\] [blockly-Miaoxue_1.0](https://pan.baidu.com/s/17cDkWtFShCRsgzX1HzQzCw)：     
初次发布，完成基本功能（编辑、运行、保存、加载）。

## 本地运行       
**Windows用户**：       
直接运行`blockly-Miaoxue.exe`；  
  
**Linux/Mac os用户**：
1. 安装第三方库：     
    ```
    pip install -r requirements.txt
    ```

2. 运行：    
    ```
    python server.py
    ```

## 部署到pcduino上     
1. 安装第三方库：     
    ```
    pip install -r requirements.txt
    ```

2. 运行：    
    ```
    python server.py
    ```         

3. 查看pcduino的ip地址（如果板子开了热点，那么默认是`192.168.100.1`）              
    ```
    ifconfig
    ```      

4. 在电脑端用浏览器访问pcduino的1234端口     
    比如：`192.168.100.1:1234`
   
## 界面截图：    
**编辑界面**：         
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_blocks.png)      
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_code.png)      
  
**运行界面**：        
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_running.png)      
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_killed.png)      
