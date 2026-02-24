# Lipi-Check: AI-Powered Hardware Debugging Assistant

Lipi-Check is an AI-powered "Tutor in a Box" designed to help engineering students in Tier-2 and Tier-3 colleges bridge the gap between theoretical schematics and physical circuit building. Using Computer Vision and AWS-based AI reasoning, it detects wiring errors on breadboards and PCBs in real-time.

## 🚀 The Problem

In many engineering labs, a high student-to-faculty ratio leads to long wait times for simple debugging. Students often get discouraged by minor wiring mistakes or polarity issues that go unnoticed, hindering their hands-on learning confidence.

## 💡 The Solution

Lipi-Check acts as a 24/7 AI Lab Mentor. It scans a student's physical circuit, compares it against an intended schematic, and explains:

- **What is wrong** (e.g., wrong pin connection).
- **Why it affects the circuit** (e.g., LED won't receive signal).
- **How to fix it** (e.g., move wire to digital Pin 13).

## 🛠️ Tech Stack

### Edge Layer:
- OpenCV for image preprocessing and capture.

### Cloud Layer (AWS):
- **Amazon S3**: For storing captured circuit images and schematics.
- **AWS Lambda**: For serverless backend processing.
- **Amazon Rekognition / Custom Vision**: For component and wire detection.
- **Amazon Bedrock (LLM)**: For generating conceptual debugging guidance.
- **Amazon Translate**: For providing feedback in local languages.

### Frontend:
- React-based web dashboard for real-time error highlighting.

## ⚙️ How It Works (Process Flow)

1. **Capture**: Student captures an image of their circuit via a camera or edge device.
2. **Preprocessing**: OpenCV handles image enhancement and noise reduction.
3. **Analysis**: The image is uploaded to AWS where the CV model detects components and the Comparison Engine matches them against a schematic graph.
4. **Reasoning**: An LLM generates a fix and a conceptual "why" explanation.
5. **Feedback**: The student receives annotated visual feedback and local-language instructions.

## 📂 Repository Structure

```
├── edge/               # OpenCV scripts for image capture and preprocessing
├── aws_lambda/         # Serverless functions for Rekognition and Bedrock integration
├── models/             # Schematic parser and graph comparison logic
├── web_app/            # React frontend for the student interface
└── docs/               # Project documentation and architecture diagrams
```
