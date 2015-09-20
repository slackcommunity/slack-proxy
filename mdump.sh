#!/bin/bash
current_time=$(date "+%Y.%m.%d-%H.%M.%S")
mongodump -h 127.0.0.1 --port 3001 -d meteor -out ./private/mongobak/$current_time
