import { ButtonRadius } from "../../../utils/exporter"
import InputField from "../../../utils/inputs/InputField"
import SelectInput from "../../../utils/select/SelectInput"


const UserData = () => {
    return (
        <>
        <div className="flex items-center justify-between mb-8">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Personal data
                </h5>
        </div>
        <div className='flex flex-col gap-4'>
            <InputField placeHolder={"Full Name"} labelName={"Full Name"} 
            inputID={"userFullName"} inputType={"text"} />
            <InputField placeHolder={"Email"} labelName={"Email"} 
            inputID={"userEmail"} inputType={"email"} />

            <InputField placeHolder={"date of birth"} labelName={"Date of Birth"} 
            inputID={"dateOfBirth"} inputType={"date"} />

            <SelectInput labelName={"Gender"} selectID={"userGender"} optionsValue={["Male", "Female"]} />
            <SelectInput labelName={"Nationality"} selectID={"userNationality"} optionsValue={["Algeria", "Ukraine"]} />

            <div className="flex justify-end py-4">
                <ButtonRadius text={"Save changes"} styleClass="bg-razzmatazz text-white py-4" />
            </div>
        </div></>
    )
}

export default UserData