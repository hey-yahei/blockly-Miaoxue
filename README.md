# blockly-Miaoxue（beta）
基于google的blockly定制，用于python的可视化编程；       
主要增加pcduino硬件控制相关的模块，借助bottle框架直接运行程序显示结果；     
   
## Windows平台可执行文件
\[2018-07-08\] ~~blockly-Miaoxue_1.0~~：     
初次发布，完成基本功能（编辑、运行、保存、加载），有比较麻烦的bug。         
  
\[2018-09-09\] [blockly-Miaoxue_1.1](https://pan.baidu.com/s/1pzYR1iBHHM4I1ooaX0LRSg):      
修复linux下无法正常运行的bug；        
修复无打印死循环程序堵塞的bug。

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

2. 修改配置文件，编辑 `conf/configure.json` 文件        
    将 `ip` 参数设置为 `"0.0.0.0"`，       
    将 `no-browser` 参数设置为 `true`，    
    其他参数根据需要进行设置。        

3. 运行：    
    ```
    python server.py
    ```         

4. 查看pcduino的ip地址（如果板子开了热点，那么默认是`192.168.100.1`）              
    ```
    ifconfig
    ```      

5. 在电脑端用浏览器访问pcduino的1234端口     
    比如：`192.168.100.1:1234`
   
## 界面截图：    
**编辑界面**：         
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_blocks.png)      
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_code.png)      
  
**运行界面**：        
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_running.png)      
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_killed.png)      
