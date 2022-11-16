import { useState } from "react";

export default function useFieldPopup<T>(value: T, timeInSeconds: number): [T, (value: T) => void] {

    const [popupText, setPopup] = useState(value);

    function setPopupText(text: T){
        if (popupText == value) {
			setPopup(text);
			setTimeout(() => {
				setPopup(value);
			}, 1000 * timeInSeconds);
		} else {
            setPopup(text)
        }
    }

    return [popupText, setPopupText];
}