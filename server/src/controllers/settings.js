const State = require('../models/settings');

exports.getSettings = async (req, res) => {
  try {
    const state = await State.findOne();
    if (!state) {
      return res.status(400).send({ error: 'STATE_NO_FOUND' });
    }
    return res.send(state);
  } catch (err) {
    return res.status(500).send({ error: 'STATE_GET_ERROR' });
  }
};

exports.createSettings = async (req, res) => {
  try {
    const nextState = await new State(req.body).save();
    res.send(nextState);
  } catch (err) {
    return res.status(400).json({ error: 'STATE_SAVE_ERROR' });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const state = await State.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, useFindAndModify: false }
    );
    if (!state) {
      return await exports.createSettings(req, res);
    }
    res.status(200).json(state);
  } catch (err) {
    res.status(400).json({ error: 'STATE_UPDATE_ERROR' });
  }
};
