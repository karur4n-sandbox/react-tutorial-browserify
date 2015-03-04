var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">Fooooooooooooooooooooooo!!!!!!!!!!!!</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
      </div>
    );
  }
});

var CommentBox = React.createClass({
   render: function() {
     return (
       <div className="commentBox">
         <h1>Comments</h1>
         <CommentList />
         <CommentForm />
       </div>
     );
   }
});

module.exports = CommentBox;
