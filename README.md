# MKO Server

Backend server for the More Knowledgeable Other (MKO) chatbot - an AI-powered educational assistant based on Vygotsky's sociocultural learning theory.

## Overview

The MKO Server is an Express.js backend that provides AI chatbot functionality designed around the concept of a "More Knowledgeable Other" - a term from educational psychology referring to someone who has greater knowledge or expertise than the learner and can provide guidance and support.

This server is built to integrate with the [Deep Chat](https://www.npmjs.com/package/deep-chat) component and supports multiple AI service providers as proxies.

## Features

- **Express.js Backend**: Fast and lightweight Node.js server
- **AI Service Integration**: Supports multiple AI providers including:
  - [OpenAI](https://openai.com/blog/openai-api)
  - [HuggingFace](https://huggingface.co/docs/api-inference/index)
  - [StabilityAI](https://stability.ai/)
  - [Cohere](https://docs.cohere.com/docs)
- **Deep Chat Compatible**: Pre-configured to work with Deep Chat UI component
- **Educational Focus**: Designed specifically for educational chatbot applications
- **Proxy Functionality**: Can act as a proxy for various AI APIs

## Educational Background

The "More Knowledgeable Other" (MKO) is a key concept in Lev Vygotsky's sociocultural theory of learning. An MKO is:

- Someone with greater understanding or higher ability than the learner
- A guide who helps learners navigate their Zone of Proximal Development (ZPD)
- Can be a teacher, peer, parent, or in this case, an AI assistant
- Provides scaffolding and support to help learners achieve tasks they couldn't complete independently

This server implements these educational principles through AI-powered conversational interfaces.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone --depth 1 https://github.com/duncanscode/mko-server.git
   cd mko-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your API keys:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   STABILITY_API_KEY=your_stability_api_key_here
   COHERE_API_KEY=your_cohere_api_key_here
   ```

4. **Start the server**
   ```bash
   npm run start
   ```

The server will start running on the default port (typically 3000).

## Configuration

### Environment Variables

The server uses environment variables to configure API access. Create a `.env` file with the following variables:

- `OPENAI_API_KEY`: Your OpenAI API key for GPT models
- `HUGGINGFACE_API_KEY`: Your HuggingFace API key for various models
- `STABILITY_API_KEY`: Your StabilityAI API key for image generation
- `COHERE_API_KEY`: Your Cohere API key for language models

### Deep Chat Integration

This server is pre-configured to work with the [Deep Chat UI project](https://github.com/OvidijusParsiunas/deep-chat/tree/main/example-servers/ui). Once both the server and UI are running, they will communicate seamlessly.

## API Endpoints

The server provides various endpoints for different AI services:

- `/openai/*` - OpenAI proxy endpoints
- `/huggingface/*` - HuggingFace proxy endpoints
- `/stability/*` - StabilityAI proxy endpoints
- `/cohere/*` - Cohere proxy endpoints

*Note: Specific endpoint documentation would depend on the actual implementation in the codebase.*

## Usage Examples

### Basic Chat Request
```javascript
fetch('http://localhost:3000/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Help me understand photosynthesis',
    context: 'biology lesson'
  })
});
```

### Educational Scenarios

The MKO server is designed for educational use cases such as:

- **Tutoring Sessions**: AI acts as a knowledgeable tutor
- **Homework Help**: Providing guidance without giving direct answers
- **Concept Explanation**: Breaking down complex topics into understandable parts
- **Study Companion**: Supporting learning through interactive conversations

## Development

### Project Structure
```
mko-server/
├── src/
│   ├── routes/          # API route handlers
│   ├── middleware/      # Express middleware
│   ├── services/        # AI service integrations
│   └── utils/           # Utility functions
├── .env                 # Environment variables (create this file)
├── package.json         # Project dependencies
└── README.md           # This file
```

## Deployment

1. Ensure Node.js is installed on your server
2. Clone the repository
3. Install dependencies with `npm install`
4. Set up your `.env` file with production API keys
5. Start the server with `npm start`

## Educational Philosophy

This project embodies Vygotsky's educational principles:

- **Social Learning**: AI facilitates social interaction around learning
- **Zone of Proximal Development**: Helps learners achieve more than they could alone
- **Scaffolding**: Provides structured support that gradually decreases
- **Cultural Mediation**: Incorporates cultural and contextual learning elements

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on the foundation of [Deep Chat](https://www.npmjs.com/package/deep-chat)

## Related Projects

- [Deep Chat UI](https://github.com/OvidijusParsiunas/deep-chat/tree/main/example-servers/ui) - Frontend component for this server
- [Deep Chat Examples](https://github.com/OvidijusParsiunas/deep-chat) - Main Deep Chat repository with examples
