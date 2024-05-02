import { BASE_URL } from '../../constants/constants'; // constants 파일에서 API 객체 import
import instance from '../../lib/axios';

export const API_USERS = Object.freeze({
  MY_INFO: `${BASE_URL}users/me`,
  PROFILE_IMG_UPLOAD: `${BASE_URL}users/me/image`,
});

// 내 정보 조회
export const getMyProfile = () => {
  return instance({
    url: API_USERS.MY_INFO,
    method: 'GET',
  });
};

// 프로필 수정
export const putMyProfileEdit = ({ nickname, profileImgUrl }) => {
  return instance({
    url: API_USERS.MY_INFO,
    method: 'PUT',
    data: { nickname, profileImgUrl },
  });
};

// 프로필 이미지 업로드
export const postProfileImgUpload = ({ profileImgUrl }) => {
  return instance({
    url: API_USERS.PROFILE_IMG_UPLOAD, // API 엔드포인트 수정
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: { image: profileImgUrl },
  });
};
