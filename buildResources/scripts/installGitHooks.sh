#!/usr/bin/env bash
ROOT_DIR=$(git rev-parse --show-toplevel)
GITHOOKS_DIR=$ROOT_DIR/.git/hooks
chmod +x ./buildResources/scripts/pre-commit.sh
ln -s -f $ROOT_DIR/buildResources/scripts/pre-commit.sh $GITHOOKS_DIR/pre-commit
echo DONE