import { useState } from "react";
import "./NewItem.css";
import PhjProfile from "../assets/PhjProfile.png";
import { FaRocket } from "react-icons/fa";
import Dummy from "../datas/dummydata.json";

const NewItem = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isWriteValue, setIsWriteValue] = useState("");
    const [isNewArtDummy, setIsNewArtDummy] = useState([...Dummy.articles]);

    const handleWriteCmt = () => {
        setIsClicked(!isClicked);
    }

    const changeWriteCmt = (e) => {
        let value = e.target.value;
        setIsWriteValue(value);
    } 

    // 더미데이터의 articles 부분만 가지고 온다.
    // 해당 배열을 복사해서 새 배열을 만든다.(일단 원본 유지하려고)
    // 복사한 배열을 가진 새 변수에 push로 새 객체를 요소로 넣는다.
    // 원본이나 스토리지에 저장안한 객체라 새로고침하면 일단 없어져요^^;;

    const submitWriteCmt = () => {
        let newData = {
            id: isNewArtDummy.length + 1,
            userId: "phj",
            userContent: isWriteValue,
            like: 0,
        }
        setIsNewArtDummy([...isNewArtDummy, newData]);
    }

    return (
        <div className="newItemWrap">
            <div className="newItemCnt">
                <img src={PhjProfile} alt="Phj 프로필 이미지" />
                <textarea className="writeCnt" type='text' onFocus={handleWriteCmt} onBlur={handleWriteCmt} onChange={changeWriteCmt} value={isWriteValue} placeholder={isClicked ? "" : "Write Here"} />
            </div>
            <div className="newItemBtn" onClick={submitWriteCmt}>
                <FaRocket size={16} />
                <span>send</span>
            </div>
        </div>
    );
};

export default NewItem;