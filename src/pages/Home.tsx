import { Overview, Samples, Description, AdoptAnimation } from "../component";
import styles from "../style";

const Home = () => {
  return (
    <div
      className={`${styles.container} ${styles.columnCenter} sm:gap-y-40 gap-y-16 sm:mt-32 mt-16`}
    >
      <Overview />
      <Samples />
      <Description />
      <AdoptAnimation />
    </div>
  );
};

export default Home;
