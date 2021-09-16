#!/bin/sh
ldd ./node_modules/lmdb-store/prebuilds/linux-x64/node.abi83.node
objdump -T ./node_modules/lmdb-store/prebuilds/linux-x64/node.abi83.node
