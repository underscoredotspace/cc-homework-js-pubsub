const PubSub = {
  publish: function pub(channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    })
    document.dispatchEvent(event)
  },
  subscribe: function sub(channel, callback) {
    document.addEventListener(channel, callback)
  }
}

module.exports = PubSub