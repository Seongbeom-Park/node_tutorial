#!/bin/bash
set -u

CURL=curl
SERVER=192.168.9.32:8081

echo "[GET /]"
${CURL} -X GET ${SERVER}

echo -e "\n\n[GET /users]"
${CURL} -X GET ${SERVER}/users
echo ""

echo -e "\n\n[GET /users/first_user]"
${CURL} -X GET ${SERVER}/users/first_user
echo ""

echo -e "\n\n[POST /users/third_user]"
${CURL} -d '{"password":"third_pass", "name":"spark"}' -H 'Content-Type: application/json' -X POST ${SERVER}/users/third_user
echo ""

echo -e "\n\n[GET /users/third_user]"
${CURL} -X GET ${SERVER}/users/third_user
echo ""

echo -e "\n\n[DELETE /users/third_user]"
${CURL} -X DELETE ${SERVER}/users/third_user
