threadedComments = {
	bubble: null,
	selectedLink: null,
	getCommentLinkSelector: function() {
		return 'li.comment div.content a[href^="#comment-"]';
	},
	
	getCommentTextSelector: function(commentId) {
		return 'div#commentbody-' + commentId;
	},
	
	getCommenterAvatar: function(commentId) {
		//alert('li#comment-' + commentId + ' div.author div.pic img');
		return jQuery('li#comment-' + commentId + ' div.author div.pic img').attr('src');
	},
	
	getReplyAreaSelector: function(commentId) {
		return 'li#comment-' + commentId + ' div.content';
	}
};

jQuery(document).ready(function() {
	jQuery(threadedComments.getCommentLinkSelector()).each(function() {
		var targetCommentId = jQuery(this).attr('href').replace(/^#comment-/, '');
		var thisCommentId = jQuery(this).parents('li.comment').attr('id').replace(/comment-/, '');
		
		var link = jQuery('<a>').attr('href', '#comment-' + thisCommentId).addClass('threadedCommentReply');
		link.append(jQuery('<img>').attr('src', threadedComments.getCommenterAvatar(thisCommentId)));
		
		var replyArea = jQuery(threadedComments.getReplyAreaSelector(targetCommentId)).find('div.threadedCommentsReplies');
		if(replyArea.length == 0) {
			replyArea = jQuery('<div>').addClass('threadedCommentsReplies');
			jQuery(threadedComments.getReplyAreaSelector(targetCommentId)).append(replyArea);
		}
		
		replyArea.append(link);		
	});
	
	jQuery(threadedComments.getCommentLinkSelector()).hover(function() {
		if(threadedComments.bubble != null) threadedComments.bubble.remove();

		var commentId = jQuery(this).attr('href').replace(/^#comment-/, '');
		threadedComments.bubble = jQuery('<div>').addClass('threadedCommentsBubble');
				
		threadedComments.bubble.html(jQuery(threadedComments.getCommentTextSelector(commentId)).html());
		
		jQuery(this).after(threadedComments.bubble);
	}, function() {
		if(threadedComments.bubble != null) threadedComments.bubble.remove();
	});
});