import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PhotoData } from "../types";
import styles from "../style";

import placeholder from "../assets/placeholder.png";

const PhotoModal: React.FC<{
  photo: PhotoData;
  handleClose: () => void;
}> = ({ photo, handleClose }) => {
  const [loaded, setLoaded] = useState(false);
  const { imgUrl, username, dogname, content } = photo;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalBackdrop} onClick={handleClose}></div>

      <div className={styles.modalContent}>
        <div className="relative">
          <img
            src={loaded ? imgUrl : placeholder}
            onLoad={() => setLoaded(true)}
            alt={dogname}
            className="w-full mb-4"
          />
          <button
            onClick={handleClose}
            className="text-2xl absolute right-4 top-2"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <h2 className="text-xl mb-2">
          <span className="text-blue-500">{username}</span>님의 반려견
        </h2>
        <p className="text-lg border py-1 px-3 mb-4">{dogname}</p>

        <p className="xs:text-md text-sm">{content}</p>
      </div>
    </div>
  );
};

export default PhotoModal;
