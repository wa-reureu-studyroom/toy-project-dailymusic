import {useState} from 'react';
import './Article.css';
import userImg01 from '../assets/userImg01.png';
import {FiThumbsUp} from 'react-icons/fi';

import {useSelector, useDispatch} from 'react-redux';
import {plus, minus} from '../redux/countSlice';

const Article = ({datas}) => { 
    //useSelector는 기존 리덕스의 connect()를 이용하지 않고 리덕스 상태를 조회할 수 있습니다. :: 스토어에서 현재 상태 값을 가져옴
    //useDispatch()는 생성한 액션을 발생시키며 액션 생성 함수를 가져옵니다.:: 변경되는 값을 스토어로 전달 역할
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [isLike, setIsLike] = useState(false)

    const handleLikeBtn = () => {
        if(isLike === false){
            dispatch(plus());
            console.log('좋아요 추가!');
        }else{
            dispatch(minus());
            console.log('좋아요 감소!');
        }
        setIsLike(!isLike);
    }

    return (
        <div className="article-wrapper">
            <div className="article-container" id={datas.id}>
                <div className="article-userImg"><img src={userImg01} alt="유저 이미지"/></div>
                <div className="article-writeBox">
                    <div className="article-userId">@{datas.userId}</div>
                    <div className="article-userContent">{datas.userContent}</div>
                </div>  
                <div className="article-likes">
                    <div className="likeBtn" onClick={handleLikeBtn}><FiThumbsUp className="article-thumbsUp"/></div>
                    <div className="like-count">{datas.like}{count}</div>
                </div>
            </div>
        </div>
    )
}

export default Article;