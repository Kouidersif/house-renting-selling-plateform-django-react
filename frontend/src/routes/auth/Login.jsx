import { Link } from "react-router-dom"
import { ButtonRadius } from "../../utils/exporter"
import InputField from "../../utils/inputs/InputField"
import propTypes from "prop-types"
import houseGiftImg from "../../assets/images/auth-images/house-as-a-gift.jpg";
import useAuthenticate from "../../hooks/auth/useAuthenticate";
import { useState } from "react";
import useGetAppContext from "../../../context/useGetAppContext";

const Login = ({urls}) => {
    const { loginFunc } = useAuthenticate();
    const [ userEmail, setUserEamil ] = useState("")
    const [ userPwd, setUserPwd ] = useState("")
    const { setErrorApi } = useGetAppContext()

    const handleButtonClick = (e)=>{
        e.preventDefault()
        if (!userEmail && !userPwd){
            // Return an error message if fields are not sent
            return setErrorApi("Please fill all fields")
        }
        const data = {
            email: userEmail,
            password: userPwd
        }
        loginFunc(
            data
        )
    }


    return (
        <div className="w-[95%] xl:w-[80%] max-h-[100vh] overflow-y-hidden mx-auto flex py-8 lg:py-16 px-4">
            <form className="w-full md:w-1/2">
            
            <div className="w-[80%] py-12 lg:py-12 mx-auto flex flex-col gap-12">
            <div>
                    <Link to={urls.home} className="flex items-center gap-2 cursor-pointer">
                    <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_2_3)">
                                <path
                                    d="M23.715 9.16499L12.465 0.164989C12.332 0.0584866 12.1667 0.000457764 11.9963 0.000457764C11.8258 0.000457764 11.6605 0.0584866 11.5275 0.164989L0.2775 9.16499C0.156135 9.26236 0.0680565 9.39506 0.025468 9.54471C-0.0171205 9.69436 -0.0121105 9.85356 0.0398037 10.0002C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5006 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V8.99999H2.8875L12 1.70999L21.1125 8.99999H21C20.8011 8.99999 20.6103 9.07901 20.4697 9.21966C20.329 9.36031 20.25 9.55108 20.25 9.74999V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4502 23.6819 10.3601C23.8079 10.27 23.903 10.143 23.9539 9.9967C24.0049 9.85037 24.0093 9.69184 23.9665 9.54291C23.9237 9.39398 23.8359 9.26195 23.715 9.16499ZM10.5 16.5H13.5V22.5H10.5V16.5Z"
                                    fill="white"
                                />
                                <path
                                    d="M18.75 19.9425L17.7825 18.975L16.725 20.0325L18.225 21.5325C18.3655 21.6722 18.5556 21.7506 18.7537 21.7506C18.9519 21.7506 19.142 21.6722 19.2825 21.5325L23.7825 17.0325L22.725 15.975L18.75 19.9425Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_3">
                                    <rect width={24} height={24} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <span className="text-xl font-semibold">RealEstate</span>
                    </Link>
                </div>
            <h2 className="text-center md:text-start">Welcome back!</h2>
            <div className="flex flex-col gap-6">
            <InputField value={userEmail} onChangeFunc={setUserEamil} placeHolder={"Enter your email"} labelName={"Email address"} inputType={"email"} inputID={"userEmail"} />
            <InputField value={userPwd} onChangeFunc={setUserPwd} placeHolder={"Enter your password"} labelName={"Password"}  inputType={"password"} inputID={"userPassword"} />
            <ButtonRadius handleButtonClick={handleButtonClick} text="Login" styleClass="bg-primary text-white py-2 mt-4 hover:bg-primary/90" />
            <h4 className="text-center mt-2">Don’t have an account ? <Link to={urls.register} className="text-blue-600">Register now</Link></h4>
            </div>
            </div>
            </form>
            <div className="hidden md:flex-1 md:block md:max-w-[80%] lg:max-w-[100%]">
                <img src={houseGiftImg} 
                alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

Login.propTypes = {
    urls : propTypes.object.isRequired,
}

export default Login