#!/bin/bash
source /home/copes/.bashrc
systemctl start postgresql-14
su -c "source /home/copes/.bashrc ; genesisInstall" - "copes"
echo "genesisInstall done"