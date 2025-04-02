import User from "../models/user.model.js";

export const getUsersforSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // get all users in the database but not the one with the logged in user id
    const allOtherUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(allOtherUsers);
  } catch (error) {
    console.error("Error in user controller:", error.message);

    res.status(500).json({ errpr: `Internal server error: ${error.message}` });
  }
};
