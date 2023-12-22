import { useEffect, useState } from "react";
import { ButtonRadius } from "../../../utils/exporter"
import InputField from "../../../utils/inputs/InputField"
import SelectInput from "../../../utils/select/SelectInput"
import propTypes from "prop-types";
import useGetAppContext from "../../../../context/useGetAppContext";

const UserData = ({account, updateUserAccount, updateUserProfile}) => {
    const { formsError }  = useGetAppContext()


    const [ userFullName, setUserFullName] = useState("")
    const [ userEmail, setUserEamil ] = useState("")
    const [ userPwd, setUserPwd ] = useState("")
    // Profile
    const [ dateOfBirth, setDateOfBirth ] = useState("")
    const [ userGender, setUserGender ] = useState("")
    const [ userNationality, setUserNationality ] = useState("")


    useEffect(()=> {
        if (account){
            setUserFullName(`${account?.first_name} ${account?.last_name}` || "")
            setUserEamil(account?.email || "")
            // Profile
            setDateOfBirth(account?.landlord?.date_of_birth || "")
            setUserGender(account?.landlord?.gender || "")
            setUserNationality(account?.landlord?.nationality || "")
        }
    }, [account])


    const handleSubmitUserAccount = (e) =>{
        e.preventDefault()
        const [firstName, lastName] = userFullName.split(" ");
        const formData = new FormData();
        formData.append("first_name", firstName)
        formData.append("last_name", lastName)
        formData.append("email", userEmail)
        if (userPwd){
            formData.append("password", userPwd)
        }

        updateUserAccount(formData)
    }


    const handleSubmitProfile = (e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("gender", userGender)
        formData.append("nationality", userNationality)
        formData.append("date_of_birth", dateOfBirth)

        updateUserProfile(formData)
    }

    return (
        <>
        <form className='flex flex-col gap-4'>
            <h2>Account</h2>
            <hr />
            <InputField placeHolder={"Full Name"} labelName={"Full Name"} 
            inputID={"userFullName"} onChangeFunc={setUserFullName} inputType={"text"} err={formsError?.first_name} value={userFullName} />

            <InputField placeHolder={"Email"} labelName={"Email"} 
            inputID={"userEmail"} onChangeFunc={setUserEamil} inputType={"email"} err={formsError?.email} value={userEmail} />
            <InputField placeHolder={"********"} labelName={"Password"}
            inputID={"userPWD"} onChangeFunc={setUserPwd} inputType={"password"} err={formsError?.password} value={userPwd} />

            <div className="flex justify-end py-4">
                <ButtonRadius handleButtonClick={handleSubmitUserAccount} text={"Save changes"} styleClass="bg-razzmatazz text-white py-4" />
            </div>
        </form>
        <form className="flex flex-col mt-4 gap-4">
            <h2>Profile</h2>
            <hr />
            <InputField placeHolder={"date of birth"} labelName={"Date of Birth"}
            onChangeFunc={setDateOfBirth} err={formsError?.date_of_birth} 
            inputID={"dateOfBirth"} inputType={"date"} value={dateOfBirth} />

            <SelectInput labelName={"Gender"} selectID={"userGender"} 
            onChangeValue={setUserGender} err={formsError?.gender} 
            optionsValue={["Male", "Female"]} selectValue={userGender} />

            <SelectInput labelName={"Nationality"} selectID={"userNationality"}  
            onChangeValue={setUserNationality} err={formsError?.nationality} 
            optionsValue={["Algerian", "Ukraine"]} selectValue={userNationality} />
            <div className="flex justify-end py-4">
                <ButtonRadius handleButtonClick={handleSubmitProfile} text={"Save changes"} styleClass="bg-razzmatazz text-white py-4" />
            </div>
        </form>
        </>
    )
}

UserData.propTypes = {
    account : propTypes.object.isRequired,
    updateUserAccount : propTypes.func.isRequired,
    updateUserProfile : propTypes.func.isRequired,
}

export default UserData