@echo off
echo ========================================
echo    Tushar Bharti Portfolio Website
echo ========================================
echo.

echo Checking for Maven installation...
mvn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Maven is not installed or not in PATH
    echo.
    echo Please install Maven from: https://maven.apache.org/download.cgi
    echo And add it to your PATH environment variable
    echo.
    echo Alternatively, you can use the static version in the 'static-version' folder
    echo which can be deployed to Netlify, Vercel, or GitHub Pages for free.
    echo.
    pause
    exit /b 1
)

echo Maven found! Compiling and running the application...
echo.

echo Step 1: Cleaning and compiling...
mvn clean compile
if %errorlevel% neq 0 (
    echo ERROR: Compilation failed
    pause
    exit /b 1
)

echo.
echo Step 2: Starting Spring Boot application...
echo.
echo The portfolio will be available at: http://localhost:8080
echo H2 Database console: http://localhost:8080/h2-console
echo.
echo Press Ctrl+C to stop the server
echo.

mvn spring-boot:run
