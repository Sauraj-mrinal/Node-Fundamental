# so here nodejs is a base image   , so node js is available in the container

FROM node:20 

# WORKDIR is a certain directory in the container 
#every container has there own file system , so 
WORKDIR /app

# so use copy -> to copy the package.json file in my directory 

COPY package.json .

# to install the package or library we use run command 
# in this case we need to install npm  , so here we are writing it in RUN command 

RUN npm install

# after that we copy rest of the code here 


COPY . . 

# the nodeJs app create a web server listening from incoming 
# request on port 3000

# it will be the same as we using the port number , then it ewill be able to reach the port number 



EXPOSE 8000

# in case of terminal if we want to execute the js file we need to write -. node then file name with extansion 
# so here same we have write -. node then file name with extansion
 
CMD ["node" , "Https.js"]

# now a simple docker file creates and we can open it using terminal 
