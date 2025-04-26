# Laserweb4

This is the "installation guide" for the Moonraker/Klipper enabled version of Laserweb4. The source code is in the 4.1 branch and the "release" in the build branch.

## How to Install

An installed Moonraker and Mainsail is assumed, if you don't have one follow the manual install guide from [Mainsail](https://docs.mainsail.xyz/setup/getting-started/manual-setup) otherwise [KIAUH](https://github.com/dw-0/kiauh) can also be used.

First download Laserweb
```
git clone https://github.com/ssendev/LaserWeb4.git --branch build ~/Laserweb4
```

To allow updates through Moonraker/Mainsail in `~/printer_data/config/moonraker.conf` add:

```ini
[update_manager Laserweb4]
type: git_repo
path: ~/Laserweb4
primary_branch: build
origin: https://github.com/ssendev/LaserWeb4.git
```



To access Laswerweb4 from `http://same-ip-or-domain-as-mainsail/Laserweb4` modify `/etc/nginx/sites-enabled/mainsail` and add:

```nginx
    location /Laserweb4/ {
       alias /home/pi/Laserweb4/;
    }
```

to access it from `http://same-ip-or-domain-as-mainsail:8004` create `/etc/nginx/sites-enabled/laserweb4` and insert:
```nginx
server {
    listen 8004;
    server_name _;

    # web_path of Laserweb4 static files
    root /home/pi/Laserweb4/;
}
```

