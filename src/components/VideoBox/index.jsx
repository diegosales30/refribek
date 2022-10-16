import video from "../../assets/videos/video01.mp4";
import styles from "./styles.module.css";
const VideoBox = () => {
  return (
    <div className={styles.container}>
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default VideoBox;
