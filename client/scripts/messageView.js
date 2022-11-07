const MessageView = {
  render: _.template(`
      <div class="chat">
        <div class="username"
        class="<%- Friends.isFriend(username) ? 'friend' : '' %>"
        data-username="<%- username %>"
        >
        <%- username %></div>
        <div class"message"><%- text %></div>
      </div>
    `, {
    escape: /<%[=-]([\s\S]+?)%>/g,
    interpolate: /<%cleanHtml([\s\S]+?)cleanHtml%>/g,
    evaluate: /<%([\s\S]+?)%>/g
  })
};