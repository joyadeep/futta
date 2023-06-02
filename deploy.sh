echo "build"


echo "Deploy files to server"
scp -r dist/* root@167.172.170.219:/var/www/html/futta.fi

echo "done"
