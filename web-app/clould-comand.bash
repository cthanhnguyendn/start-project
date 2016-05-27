cf login -a https://api.run.pivotal.io
cthanhnguyendn@gmail.com
cf m
cf enable-ssh spring-music
cf create-service-key mysql EXTERNAL-ACCESS-KEY
cf service-key mysql EXTERNAL-ACCESS-KEY
{
 "hostname": "us-cdbr-iron-east-04.cleardb.net",
 "jdbcUrl": "jdbc:mysql://us-cdbr-iron-east-04.cleardb.net/ad_e7bd54db4c10a03?user=b4ff4c47b2c486\u0026password=d4b0e744",
 "name": "ad_e7bd54db4c10a03",
 "password": "d4b0e744",
 "port": "3306",
 "uri": "mysql://b4ff4c47b2c486:d4b0e744@us-cdbr-iron-east-04.cleardb.net:3306/ad_e7bd54db4c10a03?reconnect=true",
 "username": "b4ff4c47b2c486"
}

cf ssh -N -L 63406:us-cdbr-iron-east-04.cleardb.net:3306 spring-music

mysql -u b4ff4c47b2c486 -h 127.0.0.1 -p -D ad_e7bd54db4c10a03 -P 63406
cf push startapp -p start-app-0.1.0.jar
cf logs startapp



//ssh
cf app startapp --guid
fc978b96-6420-4169-84d1-9f9bae623144
cf curl /v2/info

{
   "name": "",
   "build": "",
   "support": "http://support.cloudfoundry.com",
   "version": 0,
   "description": "Cloud Foundry sponsored by Pivotal",
   "authorization_endpoint": "https://login.run.pivotal.io",
   "token_endpoint": "https://uaa.run.pivotal.io",
   "min_cli_version": "6.13.0",
   "min_recommended_cli_version": "latest",
   "api_version": "2.56.0",
   "app_ssh_endpoint": "ssh.run.pivotal.io:2222",
   "app_ssh_host_key_fingerprint": "e7:13:4e:32:ee:39:62:df:54:41:d7:f7:8b:b2:a7:6b",
   "app_ssh_oauth_client": "ssh-proxy",
   "logging_endpoint": "wss://loggregator.run.pivotal.io:443",
   "doppler_logging_endpoint": "wss://doppler.run.pivotal.io:443",
   "user": "7af73629-5f33-4f6b-908f-cbc9b195b50e"
}
cf ssh-code
ssh -p 2222 cf:fc978b96-6420-4169-84d1-9f9bae623144/0@ssh.run.pivotal.io

