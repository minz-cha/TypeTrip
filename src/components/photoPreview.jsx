import React, { useState, useRef } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const Preview = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  const handleAddPhotoClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        accept="image/*"
        multiple
        type="file"
        style={{ display: "none" }}
        onChange={(e) => onUpload(e)}
      />
      <AddAPhotoIcon onClick={handleAddPhotoClick} />
      {imageSrc && <img width={"10%"} src={imageSrc} alt="Preview" />}
    </div>
  );
};

export default Preview;
