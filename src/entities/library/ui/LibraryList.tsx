import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { getAllThunk } from "../models/libraryThunks";
import { List, Spin, Input } from "antd";
import { LibraryDetails } from "../types/LibraryType";
import LibraryApi from "../api/LibraryApi";
import ModalOne from "./ModalOne";
import LibraryItem from "./LibraryItem";
import styles from "./Library.module.css";

const { Search } = Input;

function LibraryList(): JSX.Element {
  const dispatch = useAppDispatch();
  const libraries = useAppSelector((state) => state.library.libraries);
  const loading = useAppSelector((state) => state.library.loading);

  const [detailsLoading, setDetailsLoading] = useState<boolean>(false);
  const [selectedLibrary, setSelectedLibrary] = useState<LibraryDetails | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    dispatch(getAllThunk());
  }, [dispatch]);

  /**
   * Фильтрация библиотек по имени
   */
  const filteredLibraries = libraries?.filter((library) =>
    library.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Загрузка деталей библиотеки по клику
   * @param name
   */
  const handleLibraryClick = async (name: string) => {
    setDetailsLoading(true);
    try {
      const details = await LibraryApi.getOne(name);
      setSelectedLibrary(details);
    } catch (error) {
      console.error("Error fetching library details:", error);
    } finally {
      setDetailsLoading(false);
    }
  };

  /**
   * Закрытие модального окна
   */
  const handleCloseModal = () => {
    setSelectedLibrary(null);
  };

  return (
    <div className={styles.library__container}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          {/* Search Input */}
          <Search
            placeholder="Поиск пакета по имени"
            allowClear
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "20px" }}
          />

          <div className={styles.library__list}>
            <List
              bordered={false}
              dataSource={filteredLibraries ? filteredLibraries : []}
              renderItem={(library) => (
                <LibraryItem
                  library={library}
                  handleLibraryClick={handleLibraryClick}
                />
              )}
            />
          </div>
        </>
      )}

      {/* Modal to show library details */}
      <ModalOne
        selectedLibrary={selectedLibrary}
        handleCloseModal={handleCloseModal}
        detailsLoading={detailsLoading}
      />
    </div>
  );
}

export default LibraryList;
