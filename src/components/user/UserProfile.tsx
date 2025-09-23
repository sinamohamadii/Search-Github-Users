import React from 'react'

type userProfileProp = {
    userName: string
}

const UserProfile = ({ userName }: userProfileProp) => {
    return (
        <h1 className='text-2xl font-bold'>{userName}</h1>
    )
}

export default UserProfile