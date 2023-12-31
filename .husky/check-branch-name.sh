#!/usr/bin/env bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

develop_branch='develop'

message="Denied commit and push to develop branch. Please use check out and create merge request"

if [[ $local_branch_name =~ $develop_branch ]]; then
  echo "*****************************"
  echo "$message"
  echo "*****************************"
  exit 1
fi

exit 0
