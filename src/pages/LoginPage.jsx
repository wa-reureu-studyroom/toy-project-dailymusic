import {useState} from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css';
import GoogleBtn from '../assets/ButtonGoogle.png';
import FacebookBtn from '../assets/ButtonFacebook.png';
import KakaoBtn from '../assets/ButtonKakao.png';
import NaverBtn from '../assets/ButtonNaver.png';
import SignUpLoding from '../assets/SingupLoding.png';
// import KakaoLogin from '../components/KakaoLogin';


const LoginPage = ({onLogin}) => {

    const handleMoveMain = () => {
        onLogin();
        console.log('hey');
    }

    const [isLoginInfo, setIsLoginInfo] = useState({
        id : '',
        pw : '',
    })

    const [isIDPlaceholder, setIsIDPlaceholder] = useState(true);
    const [isPwPlaceholder, setIsPwPlaceholder] = useState(true);
    const navigate = useNavigate();
    
    const REST_API_KEY = '89a076fb0c2d5c0080a342b9826307be';
    const REDIRECT_URI = 'http://localhost:3000/auth';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    const changeIDValue = (e) => {
        setIsLoginInfo({
            ...isLoginInfo,
            id : e.target.value,
        })
    }

    const changePWValue = (e) => {
        setIsLoginInfo({
            ...isLoginInfo,
            pw : e.target.value,
        })
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleOnClick();
        }
    }

    const handleOnClick = () => {
        navigate('/');
    }

    const handleKakaoLogin = () => {
        window.location.href = link;
    }

    // 프론트에서 REST API KEY랑 REDIRECT URI로 인가코드를 발급
    // 발급받은 인가코드를 백엔드로 보냄
    // 백엔드는 인가코드로 액세스 토큰을 발급
    // 액세스 토큰으로 유저정보를 조회해서 DB 저장
    // 백엔드에서 JWT 토큰을 프론트로 전달하면 로그인 과정 끝.

    return (
        <section className='loginPageEntire'>
            <div className='loginLeft'>
                <h1 className='leftLogo'>감성</h1>
            </div>
            <div className='loginRight'>
                <div className='loginPart'>
                    <h1 className='loginTitle'>Login</h1>
                    <div className='loginInputAll'>
                        <input className='loginInput' type='text' placeholder={isIDPlaceholder ? 'ID' : ''} value={isLoginInfo.id} onChange={changeIDValue} onFocus={() => {setIsIDPlaceholder(false)}} onBlur={() => {setIsIDPlaceholder(true)}}></input>
                        <input className='loginInput' type='text' placeholder={isPwPlaceholder ? 'Password' : ''} value={isLoginInfo.pw} onChange={changePWValue} onFocus={() => {setIsPwPlaceholder(false)}} onBlur={() => {setIsPwPlaceholder(true)}}></input>
                        <img className='signupIcon' onClick={handleMoveMain} src={SignUpLoding} alt="signupLoadingIcon" />
                    </div>
                    <span className='loginCnt loginSelect' >OR</span>
                    <ul className='SSOList'>
                        <li className='loginSSO'><img src={GoogleBtn} alt="GoogleButton" /></li>
                        <li className='loginSSO'><img src={FacebookBtn} alt="FacebookButton" /></li>
                        <li className='loginSSO' onClick={handleKakaoLogin}><img src={KakaoBtn} alt="KakaoButton" /></li>
                        <li className='loginSSO'><img src={NaverBtn} alt="NaverButton" /></li>
                    </ul>
                    <p className='loginCnt'>not a member? Be our Member!!</p>
                    <p className='loginCnt'>No Thanks! Start the Geust!</p>
                    <p className='loginCnt loginFooter'>Copyright @ 2023 Gamsung Inc. All rghts reserved.</p>
                </div> 
            </div>
        </section>
    );
};

export default LoginPage;