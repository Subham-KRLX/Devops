#!/usr/bin/env bash
set -euo pipefail

AWS_REGION="${AWS_REGION:-us-east-1}"
ECS_CLUSTER="${ECS_CLUSTER:-sparkspirit-cluster}"
ECS_SERVICE="${ECS_SERVICE:-sparkspirit-service}"
ALB_NAME="${ALB_NAME:-sparkspirit-alb}"

TASK_ARN=$(aws ecs list-tasks \
  --cluster "$ECS_CLUSTER" \
  --service-name "$ECS_SERVICE" \
  --desired-status RUNNING \
  --query 'taskArns[0]' \
  --output text \
  --region "$AWS_REGION")

if [[ "$TASK_ARN" == "None" || -z "$TASK_ARN" ]]; then
  echo "No running ECS task found for $ECS_SERVICE in $ECS_CLUSTER."
  exit 1
fi

ENI_ID=$(aws ecs describe-tasks \
  --cluster "$ECS_CLUSTER" \
  --tasks "$TASK_ARN" \
  --query 'tasks[0].attachments[0].details[?name==`networkInterfaceId`].value|[0]' \
  --output text \
  --region "$AWS_REGION")

PUBLIC_IP=$(aws ec2 describe-network-interfaces \
  --network-interface-ids "$ENI_ID" \
  --query 'NetworkInterfaces[0].Association.PublicIp' \
  --output text \
  --region "$AWS_REGION")

ALB_DNS=$(aws elbv2 describe-load-balancers \
  --names "$ALB_NAME" \
  --query 'LoadBalancers[0].DNSName' \
  --output text \
  --region "$AWS_REGION")

APP_URL="http://$ALB_DNS"
HEALTH_URL="$APP_URL/api/health"

echo "SparkSpirit ECS deployment"
echo "Cluster: $ECS_CLUSTER"
echo "Service: $ECS_SERVICE"
echo "Task: $TASK_ARN"
echo "Task public IP: $PUBLIC_IP"
echo "Load balancer: $ALB_NAME"
echo "Frontend: $APP_URL"
echo "Health: $HEALTH_URL"
echo

curl -fsS "$HEALTH_URL"
echo
