# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the build folder from the React app to the Nginx container
COPY build/ /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]