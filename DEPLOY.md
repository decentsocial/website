install nginx on server

```
apt install nginx
```

create file `vim /etc/nginx/sites-available/decent_social`

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/decent_social/html/_site;
        index index.html index.htm index.nginx-debian.html;

        server_name decent.social www.decent.social;

	error_page    404 /index.html;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

link to `sites-enabled`

```
ln -s /etc/nginx/sites-available/decent_social /etc/nginx/sites-enabled/
```

verify nginx config is correct

```
nginx -t
```

reload nginx

```
service nginx reload
```

# update website decent.social

```
ssh root@decent.social "cd /var/www/decent_social/html; git pull; devblog"
```