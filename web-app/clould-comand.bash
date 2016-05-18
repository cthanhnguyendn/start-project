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