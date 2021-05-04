#!/usr/bin/env bash
# intended to be executed by AWS CodeDeploy Agent.
# It updates sources in /home/ubuntu/ProServe and then executes this script

chown -R ubuntu:ubuntu /home/ubuntu/ProServe

cd /home/ubuntu/ProServe

docker-compose -f docker-compose-staging.yml build

echo "AfterInstall stage done"