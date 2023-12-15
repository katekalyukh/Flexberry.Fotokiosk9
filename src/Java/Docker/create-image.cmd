docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk9-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fotokiosk9-java/app ../../..
