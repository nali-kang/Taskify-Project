import { useRef, useState } from 'react';
import styled from 'styled-components';
import add_icon from '../../assets/icon/add_icon.png';

function ImgUpload({ edit, small }) {
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
    <Label small={small} htmlFor="fileInput">
      {uploadedImage ? (
        <>
          <Image small={small} src={URL.createObjectURL(uploadedImage)} alt="업로드 된 이미지" />
          {edit && <Overlay small={small} />}
        </>
      ) : (
        <AddIcon small={small} onClick={handleClick}>
          <img src={add_icon} alt="add icon" />
        </AddIcon>
      )}
      <Input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        ref={fileInputRef}
      />
      <Button small={small} onClick={handleClick}>
        Choose File
      </Button>
    </Label>
  );
}

const Label = styled.label`
  position: relative;
  display: block;
  width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};

  @media only screen and (max-width: 768px) {
    width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
  }
`;

const Image = styled.img`
  display: flex;
  width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
  }
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  cursor: pointer;
  opacity: 0;

  @media only screen and (max-width: 768px) {
    width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
  }
`;

const AddIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 0.375rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
  }
`;
const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
  }
`;

const Input = styled.input`
  display: none;
`;

export default ImgUpload;
