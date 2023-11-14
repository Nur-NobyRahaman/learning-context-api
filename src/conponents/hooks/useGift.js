import { useState } from "react"

const useGift = () => {
    const [gift, setGift] = useState();
    return [gift, setGift];
}
export default useGift;