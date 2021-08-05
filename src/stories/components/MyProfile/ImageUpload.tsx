import React, { useState , useEffect} from "react";
import '../../styles/myProfile/imageUpload.scss';
import {AiOutlinePlus,AiFillCloseCircle} from 'react-icons/ai';
import { string } from "yup";

interface ImageUploadProps {
    setSelectedImgFiles:(files:any[])=> void
}
const ImageUpload:React.FC<ImageUploadProps>= ({setSelectedImgFiles}) =>{
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(()=>{
        setSelectedImgFiles(selectedFiles)
    },[selectedFiles])

    const handleImageChange = (e:any) => {
        const MAX_LENGTH = 5;
        const SUPPORTED_FORMAT = ['image/png', 'image/jpg', 'image/jpeg']
        if(selectedFiles.length >= MAX_LENGTH){
            e.preventDefault()
            return
        }else{
            let imageFiles = Array.from<File>(e.target.files).every(file =>(
                SUPPORTED_FORMAT.includes(file.type)
            ))
            if(imageFiles){
                        const filesArray = Array.from(e.target.files).slice(0,5-selectedFiles.length).map((file) =>
                        URL.createObjectURL(file));
                        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
                        Array.from(e.target.files).map(
                        (file:any) => URL.revokeObjectURL(file) 
                    )
                        setErrorMsg('')
                    }else{
                        setErrorMsg(': Only supported Image formats are:(.jpg, .jpeg and .png)') 
                    }
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
                Upload Image { errorMsg && (<span className='imgFormatError'>{errorMsg}</span>)}
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
                {
                    selectedFiles.length < 5?
                    (
                    <div className='returnImageUpload'>
                        <input type="file" id="file" multiple onChange={handleImageChange} />
                        <div className="imageUploadLabelHolder">
                            <label htmlFor="file" className="imageUploadLabel">
                                <AiOutlinePlus size={30}/>
                            </label>
                        </div>
                    </div>
                    ):'' 
                }
            </div>
        </div>
        );
    };
export default ImageUpload;


