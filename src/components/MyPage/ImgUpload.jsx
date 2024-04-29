import { useRef, useState } from 'react';
import styled from 'styled-components';
import add_icon from '../../assets/icon/add_icon.png';

const ImgUpload = ({ edit, $small }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  return (
    <Label small={$small} htmlFor="fileInput">
      {uploadedImage ? (
        <>
          <Image small={$small} src={URL.createObjectURL(uploadedImage)} alt="업로드 된 이미지" />
          {edit && <Overlay small={$small} />}
        </>
      ) : (
        <AddIcon small={$small} onClick={handleClick}>
          <img src={add_icon} alt="add icon" style={{ width: '25px', height: '25px' }} />
        </AddIcon>
      )}
      <Input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        ref={fileInputRef}
      />
      <Button small={$small} onClick={handleClick}>
        Choose File
      </Button>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: block;
  width: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  height: ${({ $small }) => ($small ? '4.18rem' : '10rem')};

  @media only screen and (max-width: 767px) {
    width: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
    height: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
  }
`;

const Image = styled.img`
  display: flex;
  width: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  height: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    width: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
    height: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
  }
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  height: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  cursor: pointer;
  opacity: 0;

  @media only screen and (max-width: 767px) {
    width: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
    height: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
  }
`;

const AddIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  height: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  padding: 0.825rem;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 0.375rem;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    width: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
    height: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
  }
`;
const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $small }) => ($small ? '4.18rem' : '10rem')};
  height: ${({ $small }) => ($small ? '4.18rem' : '10rem')};

  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    width: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
    height: ${({ $small }) => ($small ? '3.19rem' : '5.5rem')};
  }
`;

const Input = styled.input`
  display: none;
`;

export default ImgUpload;
