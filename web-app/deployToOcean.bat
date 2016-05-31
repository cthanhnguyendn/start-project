#!/usr/bin/env bash
scp target/start-app-0.1.0.jar root@128.199.209.118:/app
'C:\Program Files (x86)\PuTTY\'putty.exe -ssh 128.199.209.118 -l root -pw thanh540734 -m J:\WorkPlace\Project\start-project\web-app\start-server.sh