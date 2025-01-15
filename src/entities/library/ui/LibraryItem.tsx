import { List, Typography } from "antd";
import type { LibraryType } from "../types/LibraryType";

const { Text } = Typography;
import styles from "./Library.module.css";

type LibraryItemProps = {
  library: LibraryType;
  handleLibraryClick: (name: string) => void;
};

function LibraryItem({
  library,
  handleLibraryClick,
}: LibraryItemProps): JSX.Element {
  return (
    <List.Item
      className={styles.library__item}
      onClick={() => handleLibraryClick(library.name)}
    >
      <div>
        <Text className={styles.library__item__link}>{library.name}</Text>
      </div>
    </List.Item>
  );
}

export default LibraryItem;
