import { useEffect, useState } from "react"
import useAxios from "../../../api/useAxios";


const useFetchListing = () => {
    const [ listingOjbects , setListing ] = useState([]);
    const [ address, setAddress ] = useState("");
    const [ bedRoomsNum, setBedRoomsNum ] = useState("");
    const [ bathRoomsNum , setBathRoomsNum ] = useState("");
    const [ contractType, setContractType ] = useState("");
    const [ listingType , setListingType ] = useState("");


    const api = useAxios()
    const fetchListing = async () =>{
        try{
            const query = `address=${address}&num_bath_rooms=${bathRoomsNum}&num_bed_rooms=${bedRoomsNum}&contract_type=${contractType}&listing_type=${listingType}`
                const response = await api.get(`/api/listing/?${query}`);
                setListing(response?.data)
        }catch(err){
            console.log("err:", err)
        }
    }

    useEffect(()=>{
        fetchListing()
    }, [address,
        bedRoomsNum,
        bathRoomsNum,
        contractType,
        listingType])

    return { listingOjbects, 
            setAddress,
            setBedRoomsNum,
            setBathRoomsNum,
            setContractType,
            setListingType,
            address,
            bedRoomsNum,
            bathRoomsNum,
            contractType,
            listingType }
}

export default useFetchListing