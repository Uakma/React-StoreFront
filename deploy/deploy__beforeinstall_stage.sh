#!/usr/bin/env bash
# intended to be executed by AWS CodeDeploy Agent.
# It updates sources in /home/ubuntu/ProServe and then executes this script

cd /home/ubuntu/

if [ -d "ProServe__bak" ]; then rm -Rf "ProServe__bak"; fi
mv ProServe ProServe__bak
mkdir ProServe

echo "BeforeInstall stage done"