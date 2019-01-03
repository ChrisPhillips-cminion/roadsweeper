docker build -t cminion/roadsweeper:1.0 .
docker tag cminion/roadsweeper:1.0 cminion/roadsweeper:latest
docker push cminion/roadsweeper:latest
docker push cminion/roadsweeper:1.0
