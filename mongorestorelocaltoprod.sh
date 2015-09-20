#!/bin/sh

#
# Daniele Brugnara 
# Modifications by Ken Wallace 20150531
# usage:
# meteor mongo xyz.meteor.com --url | ./mongorestorelocaltoprod.sh "2015.05.31-11.22.45"
#

read mongo_auth

db_name=`echo $mongo_auth | awk '{split($0,array,"/")} END{print array[4]}'`
ar=`echo $mongo_auth | tr '//' '\n' | grep client | tr ':' '\n' | head -n 2 | tr '@' '\n' | tr '\n' ':'`
backupdir_name="$1"

username=`echo $ar | awk '{split($0,array,":")} END{print array[1]}'`
password=`echo $ar | awk '{split($0,array,":")} END{print array[2]}'`
host=`echo $ar | awk '{split($0,array,":")} END{print array[3]}'`

# echo $host
# echo $username
# echo $password
# echo $db_name

command_str="mongorestore -u $username -p $password -h $host:27017 -db $db_name ./private/mongobak/$backupdir_name/meteor --drop"

echo $command_str

