import Conversation from "../models/conversation.model.js";

export const getUsersforSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const conversations = await Conversation.find({
      participants: loggedInUserId,
    }).populate("participants");

    const otherUsers = new Map();

    conversations?.forEach((convo) => {
      convo?.participants?.forEach((user) => {
        if (
          user._id.toString().toLowerCase() !==
          loggedInUserId.toString().toLowerCase()
        ) {
          otherUsers.set(user._id.toString(), user);
        }
      });
    });

    const sidebarUsers = Array.from(otherUsers.values());

    res.status(200).json(sidebarUsers);
  } catch (error) {
    console.error("Error in user controller:", error.message);

    res.status(500).json({ errpr: `Internal server error: ${error.message}` });
  }
};
