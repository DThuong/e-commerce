import icons from "./icons"

const { MdOutlineStar, MdOutlineStarBorder} = icons
export const createSlug = string => string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('').join('-') 

export const formatNumber = number => Number(number.toFixed(1)).toLocaleString() 

export const renderStar = (number) => {
    if(!Number(number)) return
    const star = []
    for(let i = 0; i < +number; i++) star.push(<MdOutlineStar color="orange"/>)
    for(let i = 5; i > +number; i--) star.push(<MdOutlineStarBorder color="orange"/>)

    return star
}

export const validate = (payload, setInvalidFields) => {
    let invalids = 0;
    const invalidFields = []; // Temporary array for invalid fields
  
    Object.entries(payload).forEach(([key, value]) => {
      if (value.trim() === "") {
        invalids++;
        invalidFields.push({ name: key, msg: "This field is required." });
      }
    });
  
    setInvalidFields(invalidFields); // Update state once after iteration
    return invalids;
  };
  