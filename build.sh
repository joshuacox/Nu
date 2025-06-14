#!/bin/sh
aclocal
autoconf
automake --add-missing
./configure
sudo make install
