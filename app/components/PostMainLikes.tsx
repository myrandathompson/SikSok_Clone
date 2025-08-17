import React, { useState } from 'react';
import { PostMainLikesCompTypes } from "../types";
import { AiFillHeart } from 'react-icons/ai';
import { Like } from '../types';
import { BiLoaderCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

export default function PostMainLikes({ post }: { post: PostMainLikesCompTypes }) {
    const router = useRouter();

    const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
    const [userLiked, setUserLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState<Like[]>([])
    const likeOrUnlike = () => {
        console.log('likeOrUnlike');
    }

    

    return (
        <>
            <div id={`PostMainLikes-${post?.id}`} className="relative mr-[75px]">
                <div className="absolute bottom-0 pl-2">
                    <div className="pb4 text-center">
                        <button 
                            disabled={hasClickedLike}
                            onClick={() => likeOrUnlike()}
                            className="rounded-full bg-gray-200 p-2 cursor-pointer"
                        >
                            {!hasClickedLike ? (
                                <AiFillHeart color={likes?.length > 0 && userLiked ? '#ff2626' : ''} size="25" />

                            ) : (
                                <BiLoaderCircle className="animate-spin" size="25" />

                            )}

                        </button>
                        <span className="text-xs text-gray-800 font-semibold">
                            {likes?.length}
                        </span>
                    </div>

                    <button
                    onClick={() => router.push(`/post/${post.id}/${post?.profile?.user_id}`)}
                    className="pb-4 etxt-center"                    
                    >

                    </button>
                </div>



            </div>
        
        </>
    )
}