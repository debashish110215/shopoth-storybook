import React, { useState } from "react";
import '../../styles/myProfile/imageUpload.scss';
import {AiOutlinePlus,AiFillCloseCircle} from 'react-icons/ai';


const ImageUpload = () =>{
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
    const [errorMsg, setErrorMsg] = useState('')

    const handleImageChange = (e:any) => {
        const MAX_LENGTH = 5;
        if(selectedFiles.length >= MAX_LENGTH){
            e.preventDefault()
            setErrorMsg(`Cannot upload files more than ${MAX_LENGTH}`)
            alert(`Cannot upload files more than ${MAX_LENGTH}`)
        }else{
            const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file));
            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
            (file:any) => URL.revokeObjectURL(file) 
            );
        }
    };
    
    const handleRemoveImg = (index:number)=>{
        const files = [...selectedFiles]
        files.splice(index, 1)
        setSelectedFiles(files)
    }
        return (
        <div className="imageUploadWrapper">
            <div className="imgUploadHeader">
                Upload Image
            </div>
            <div className="retrunImageUploadMain">
                <div className="imageUploadPreview">
                    {
                        selectedFiles.length > 0 &&
                        selectedFiles.map((photo:any, index:number) => (
                                <div className="returnImageWrapper" key={photo}>
                                    <img src={photo} alt=""/>
                                    <span 
                                        className='cancelUploadedImage' 
                                        onClick={()=> handleRemoveImg(index)}>
                                            <AiFillCloseCircle color='red'/>
                                    </span>
                                </div>
                            ))
                    }
                </div>
                <div className='returnImageUpload'>
                    <input type="file" id="file" multiple onChange={handleImageChange} />
                    <div className="imageUploadLabelHolder">
                        <label htmlFor="file" className="imageUploadLabel">
                            <AiOutlinePlus size={30}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default ImageUpload;


