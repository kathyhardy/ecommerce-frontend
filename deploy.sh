#!/bin/bash
set -e

# === CONFIGURATION ===
PROJECT_ID="your-gcp-project-id"
REGION="australia-southeast1"
SERVICE_NAME="nextjs-app"

# === FRONTEND: Firebase Hosting ===
echo "Building Next.js static export..."
cd frontend
npm install
npm run build
npm run export

echo "Deploying static assets to Firebase Hosting..."
firebase deploy --only hosting

cd ..

# === BACKEND: Cloud Run ===
echo "Building Docker image for Cloud Run..."
cd backend
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME .

echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated

cd ..

# === FIREBASE REWRITE CONFIG ===
echo "Updating Firebase Hosting rewrites..."
cat > firebase.json <<EOF
{
  "hosting": {
    "public": "frontend/out",
    "rewrites": [
      {
        "source": "**",
        "run": {
          "serviceId": "$SERVICE_NAME",
          "region": "$REGION"
        }
      }
    ]
  }
}
EOF

echo "Redeploying Firebase Hosting with rewrites..."
firebase deploy --only hosting

echo "✅ Deployment complete!"