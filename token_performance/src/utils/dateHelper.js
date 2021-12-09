const time_stamp_to_local = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

module.exports = { time_stamp_to_local };
