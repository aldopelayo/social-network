const socialnetwork = new mongoose.Schema({
    username: { type: String, required: true },
    author: String,
    email: { type: Number, required: true },
    thought: { type: Number, required: true },
    friends: { type: Number, required: true },
  });
