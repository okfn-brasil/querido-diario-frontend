#!/bin/bash

export PATH="$(yarn global bin):$PATH"

all-contributors check --config $GITHUB_WORKSPACE/.all-contributorsrc \
  | sed -n '2p' \
  | sed 's/, /\n/g' \
  | xargs -I {} all-contributors add --config $GITHUB_WORKSPACE/.all-contributorsrc {} doc

