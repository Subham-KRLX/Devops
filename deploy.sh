#!/bin/bash

# --- SparkSpirit Shop EC2 Deployment Script ---

# 1. Update and Install Dependencies
echo "🚀 Updating system and installing Docker..."
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

echo "✅ Docker installed and configured."

# 2. Setup environment
echo "🌐 Setting up environment..."
EC2_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
if [ -z "$EC2_IP" ]; then
    read -p "Enter your EC2 Public IP: " EC2_IP
fi

# Create client .env if it doesn't exist
echo "NEXT_PUBLIC_API_URL=http://$EC2_IP/api" > client/.env
echo "✅ Client environment configured with IP: $EC2_IP"

# 3. Build and Start Services
echo "🏗️ Building and starting containers (this may take a few minutes)..."
sudo docker-compose -f docker-compose.prod.yml up -d --build

echo "----------------------------------------------------"
echo "🎉 Deployment Complete!"
echo "📍 Access your app at: http://$EC2_IP"
echo "📍 Backend API health: http://$EC2_IP/api/health"
echo "----------------------------------------------------"
echo "To view logs, run: sudo docker-compose -f docker-compose.prod.yml logs -f"
