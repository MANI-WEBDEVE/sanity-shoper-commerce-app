'use client'
import { createComment, getCommentsByProductId } from '@/sanity/lib/client'
import { Star } from 'lucide-react'
import React, {useState, useEffect} from 'react'
import { useUser } from '@clerk/nextjs'
import { SanityDocument } from 'next-sanity'
const Comments = ({product}:any) => {
    const {user} = useUser()
    const [rating, setRating] = useState(0)
    const [commentText, setCommentText] = useState('')
    const [comments, setComments] = useState<SanityDocument<{ product: { _type: string; _ref: string; }; email: string; stars: number; commentText: string; createdAt: string; _type: string; }>[]>([])

    const email = user?.emailAddresses[0].emailAddress as string
    const handleRatingChange = (newRating:number) => {
        setRating(newRating);
      };
    
      useEffect(() => {
        // Fetch comments for the current product
        const fetchComments = async () => {
          const fetchedComments = await getCommentsByProductId(product?._id);
          setComments(fetchedComments);
        };
    
        fetchComments();
      }, [product]);  

      const handleAddComment = async () => {
        if (commentText.trim() !== '') {
            const newComment = await createComment({productId: product._id, email, commentText, stars: rating})
            setComments([...comments, newComment]);

            // Reset input values
            setCommentText('');
            setRating(0);
        }
      }


    

  return (
    <>
       <div className="max-w-7xl mx-auto mt-20">
       <h2 className="text-2xl font-bold mb-4">Comments</h2>

        <div className='flex items-center gap-3 space-x-2 mb-4'>
            {[1,2,3,4,5].map((items) => (
                <Star
                key={items}
                className={items <= rating ? 'text-[#FFD700] text-2xl cursor-pointer' : 'text-gray-300 text-2xl cursor-pointer'}
                onClick={() => handleRatingChange(items)}
                />
            ))}
        </div>
        
        <div className='flex items-center space-x-4 mb-4 gap-2'>
            <input className='px-7 py-2 rounded text-white' type="text" placeholder='Enter Your Comment' value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
            <button onClick={handleAddComment} className='bg-yellow-700  px-7 py-2 rounded text-black'>Submit</button>
        </div>


        <div className=' mb-2 md:w-1/2 flex flex-col justify-center gap-2'>
        {comments.map((comment, index) => (
          <div key={index} className=" mt-4 bg-neutral-200/15 px-7 py-6 rounded">
            <strong>{comment.email}:</strong> {comment.commentText} 
            <div className='flex flex-row space-x-1'>
              {[...Array(comment.stars)].map((_, i) => (
                <Star key={i} className="text-[#FFD700] text-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>

       </div>
    </>
  )
}

export default Comments
