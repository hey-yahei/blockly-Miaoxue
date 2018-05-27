# blockly-Miaoxue（beta）
基于google的blockly定制，用于python的可视化编程；       
主要增加pcduino硬件控制相关的模块，借助bottle框架直接运行程序显示结果；     
   

## 本地运行         

1. 安装第三方库：     
    ```
    pip install -r requirements.txt
    ```

2. 确保python环境变量正确     
    测试方式如下：     
    `win+R`打开“运行”窗口，输入cmd，输入python回车，如果能进入python解释行则正常     

3. 运行：    
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
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_blocks.png)      
![](https://raw.githubusercontent.com/hey-yahei/blockly-Miaoxue/master/demos/demo_code.png)      
