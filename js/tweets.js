(function() {

  this.twitter = function(tweets) {
    var body, html, tweet, url, username, _i, _len;
    html = [];
    for (_i = 0, _len = tweets.length; _i < _len; _i++) {
      tweet = tweets[_i];
      username = tweet.user.screen_name;
      url = "http://twitter.com/" + username + "/statuses/" + tweet.id_str;
      body = tweet.text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
        return "<a href='" + url + "' rel='external'>" + url + "</a>";
      }).replace(/\B@([_a-z0-9]+)/ig, function(name) {
        return "<a href='http://twitter.com/" + (name.substring(1)) + "' class='reply'>" + name + "</a>";
      }).replace(/\B#([_a-z0-9]+)/ig, function(tag) {
        return "<a href='http://twitter.com/search/" + (encodeURIComponent(tag)) + "' class='tag'>" + tag + "</a>";
      });
      html.push("<li class=\"tweet\"><blockquote cite=\"" + url + "\">" + body + "</blockquote></li>");
    }
    return document.getElementById('tweets').innerHTML = html.join("\n");
  };

}).call(this);
