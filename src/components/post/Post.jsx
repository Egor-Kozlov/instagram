import React from 'react'

import post1x1 from '../../img/images/post/post-1x1.png'
import avatarImg from '../../img/images/post/post-avatar.png'

function Post(params) {

    const namesUsers = ['egor', 'maksim', 'nikita']
    const usersInfo = [
        {
            name: 'egor',
            age: 23,
        }, 
        {
            name: 'maksim',
            age: 24,
        }
    ]
        
    console.log(namesUsers, usersInfo);

    return (
        <div className='wrap'>
            <div className="wrap--feed">
                <div className = 'post'>
                    <div className = 'post__header'>
                        <div className = 'post__avatar'><img src={avatarImg} alt="avatar" /></div>
                        <div className = 'post__nickname'>Ruffles</div>
                    </div>
                    <div className="post__image"><img className = 'img' src={post1x1} alt="post" /></div>
                    <div className = 'post-actions'>
                        <ul className = 'post-actions__list'>
                            <li className = 'post-actions__item post-actions__item--like'></li>
                            <li className = 'post-actions__item post-actions__item--comment'></li>
                            <li className = 'post-actions__item post-actions__item--share'></li>
                            <li className = 'post-actions__item post-actions__item--bookmark'></li>
                        </ul>
                    </div>
                    <div className="post__footer">
                        <div className="post__likes">100 Likes</div>
                        <div className="post__description"><span className = 'post__nickname'>Ruffles</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est facilis consequatur iure aspernatur et recusandae nam cupiditate, laboriosam aliquid nisi eum eos rerum sint placeat, itaque voluptatum tempora illum. Magni?</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Post