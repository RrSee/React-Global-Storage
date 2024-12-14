import {useState} from 'react'
import FormItem from './FormItem'

const Form = ({ formInputs, formButtons, image, formStyle, containerStyle = '' }) => {

    const [formData,setFormData] = useState({})

    const handleInputChange = (name,value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

  return (
    <div className={`${containerStyle} flex ${image?.position === "left" ? "flex" : "flex-row-rewerse"}`}>
        {image && <img className={image.style} src={image.url}></img>}
        <form action="" className={formStyle}>
            {formInputs.map(item => <FormItem label={item.label} name={item.name} type={item.type} handleInputChange={handleInputChange} placeholder={item.placeholder}/>)}

            {formButtons.map(button => <button className={button.style} onClick={button.action}>{button.title}</button>)}
        </form>
    </div>
  )
}

export default Form