import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const SuggestedUsers = () => {
    const { suggestedUsers } = useSelector(store => store.auth);

    // Ensure `suggestedUsers` is a valid array
    if (!Array.isArray(suggestedUsers) || suggestedUsers.length === 0) {
        return (
            <div className='my-10 text-center text-gray-500'>
                <p>No suggestions available at the moment.</p>
            </div>
        );
    }

    return (
        <div className='my-10'>
            <div className='flex items-center justify-between text-sm'>
                <h1 className='font-semibold text-gray-600'>Suggested for you</h1>
                <span className='font-medium cursor-pointer'>See All</span>
            </div>
            {suggestedUsers.map((user) => (
                <div key={user._id} className='flex items-center justify-between my-5'>
                    <div className='flex items-center gap-2'>
                        <Link to={`/profile/${user?._id}`}>
                            <Avatar>
                                <AvatarImage src={user?.profilePicture} alt={`${user?.username || 'user'}'s profile picture`} />
                                <AvatarFallback>
                                    {user?.username?.[0]?.toUpperCase() || 'U'}
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                        <div>
                            <h1 className='font-semibold text-sm'>
                                <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
                            </h1>
                            <span className='text-gray-600 text-sm'>{user?.bio || 'Bio not available'}</span>
                        </div>
                    </div>
                    <span className='text-[#3BADF8] text-xs font-bold cursor-pointer hover:text-[#3495d6]'>
                        Follow
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SuggestedUsers;



// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

// const SuggestedUsers = () => {
//     const { suggestedUsers } = useSelector(store => store.auth);
//     return (
//         <div className='my-10'>
//             <div className='flex items-center justify-between text-sm'>
//                 <h1 className='font-semibold text-gray-600'>Suggested for you</h1>
//                 <span className='font-medium cursor-pointer'>See All</span>
//             </div>
//             {
//                 suggestedUsers.map((user) => {
//                     return (
//                         <div key={user._id} className='flex items-center justify-between my-5'>
//                             <div className='flex items-center gap-2'>
//                                 <Link to={`/profile/${user?._id}`}>
//                                     <Avatar>
//                                         <AvatarImage src={user?.profilePicture} alt="post_image" />
//                                         <AvatarFallback>CN</AvatarFallback>
//                                     </Avatar>
//                                 </Link>
//                                 <div>
//                                     <h1 className='font-semibold text-sm'><Link to={`/profile/${user?._id}`}>{user?.username}</Link></h1>
//                                     <span className='text-gray-600 text-sm'>{user?.bio || 'Bio here...'}</span>
//                                 </div>
//                             </div>
//                             <span className='text-[#3BADF8] text-xs font-bold cursor-pointer hover:text-[#3495d6]'>Follow</span>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default SuggestedUsers