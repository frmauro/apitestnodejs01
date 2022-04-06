# apitestnodejs01

## command for build image 
docker build --tag apitestnodejs .

# command for run userapi container 
docker run --name apitestnodejs -d -p 3000:3000 apitestnodejs
