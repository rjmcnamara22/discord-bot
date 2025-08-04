# discord-bot

A modular Discord bot built with `discord.js` and MongoDB, currently supporting command handling and core moderation commands 
such as `/kick`, `/ban`, and `/timeout`. Future development will introduce logging, role management, and fun user interactions.

---

## 🚀 Features

- Slash command-based moderation (`/kick`, `/ban`, `/timeout`)
- MongoDB integration for persistent storage
- Built with modularity and future expansion in mind
- MIT Licensed

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/)
- [MongoDB](https://www.mongodb.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variable handling

---

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/discord-bot.git
cd discord-bot
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
```.env
DISCORD_TOKEN=your_discord_bot_token
MONGODB_URI=your_mongodb_connection_string
```
```config.json
{
  "testServer":"your_server_id"
  "clientID":"your_client_id"
  "devs":["your_user_id"]
}
```
### 4. Start the Bot
```bash
npm start
