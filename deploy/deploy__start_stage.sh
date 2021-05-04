#!/usr/bin/env bash
# intended to be executed by AWS CodeDeploy Agent.
# It updates sources in /home/ubuntu/ProServe and then executes this script

cd /home/ubuntu/ProServe

docker-compose -f docker-compose-staging.yml stop
docker-compose -f docker-compose-staging.yml run -T --rm api python3 manage.py migrate
docker-compose -f docker-compose-staging.yml run -T --rm api python3 manage.py collectstatic --noinput
docker-compose -f docker-compose-staging.yml up -d

echo "Start stage done"