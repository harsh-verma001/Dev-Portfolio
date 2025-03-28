#!/bin/bash

# Build the Next.js application
echo "Building Next.js application..."
bun run build

# Create a zip file of the output directory
echo "Creating zip file of the output..."
cd out
zip -r ../portfolio-build.zip .

echo "Build complete! The static site is available in portfolio-build.zip"
