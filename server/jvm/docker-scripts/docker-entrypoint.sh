#!/bin/bash
systemctl start postgresql-14
systemctl enable sshd.service
systemctl start sshd.service
su -c "startServer" - "copes"
echo "Logged as copes, starting server"
tail -f /dev/null