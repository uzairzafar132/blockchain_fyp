# Use an existing image as the base image
FROM node:14

# Set the working directory
WORKDIR .

# Install Truffle globally

RUN npm install --global --quiet npm truffle ganache

# Copy the rest of the files to the container
COPY . .

# Compile the contracts
RUN truffle compile

# Set the default command to run when the container starts
CMD ["truffle", "migrate"]