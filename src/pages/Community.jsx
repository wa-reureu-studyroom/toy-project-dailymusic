import React from 'react';
import './Community.css';
import NewItem from '../component/NewItem'

const Community = () => {
    return(
        <section className='communityWrap'>
            <h1>Community</h1>
            <NewItem />
        </section>
    )
}

export default Community;