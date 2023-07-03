import React from 'react'



import gurenge from '/gurenge.jpg'
const Comment = ({comment}) => {
  return (
    <>
  


	<div className="other-comment">
		<img className="user-img" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
		<div className="comment">
		<p className="username">{comment.snippet.topLevelComment.snippet.authorDisplayName} </p>

			<p>{comment.snippet.topLevelComment.snippet.textDisplay.slice(0, 285) + "..."}</p>
		</div>
	</div>

	






    
    </>
  )
}

export default Comment