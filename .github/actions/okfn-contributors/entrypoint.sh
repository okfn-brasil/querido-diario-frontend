#!/bin/bash

yarn contributors:check --config $CONTRIBUTORS_RC | sed -n '4p' | sed 's/, /\n/g' | xargs -I {} yarn contributors:add {} doc
