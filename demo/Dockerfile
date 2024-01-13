# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Build the application
RUN ./mvnw clean package

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]