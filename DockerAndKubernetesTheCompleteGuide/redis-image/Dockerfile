# Use an existing docker image as a base
FROM alpine 

# Download and install a dependency
    #apk is a package manager that comes pre-installed on Alpine image
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]