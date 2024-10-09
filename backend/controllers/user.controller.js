import User from "../models/UserSchema.js";
import Review from "../models/ReviewSchema.js";

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({ message: 'User not found' });
    }
};

export const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        await updatedUser.save();
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (await User.exists({ _id: id })) {
            await User.findByIdAndDelete(id);
            res.status(200).send({ message: 'User by id: ' + id + ' deleted successfully' });
        } else {
            res.status(404).send({ message: 'User by id: ' + id + ' not found' });
        }
    } catch (error) {
        res.status(404).send(error);
    }
};

export const getSingleUserReviews = async (req, res) => {
    const { id } = req.params;
    try {
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).send({ message: 'User not found' });
        }
        const reviewByUser = await Review.find({ user: id });
        res.status(200).send(reviewByUser);
    } catch (error) {
        res.status(400).send(error);
    }
};
