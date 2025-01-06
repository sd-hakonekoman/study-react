import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  publishedAt: string;
};

export default function Date({ publishedAt }: Props) {
  return (
    <span className={styles.data}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {publishedAt}
    </span>
  );
}
