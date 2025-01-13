import { Spin, Modal } from "antd";
import CodeHighlighter from "../../../widgets/Code/CodeHighlighter";
import { LibraryDetails } from "../types/LibraryType";
import { Typography } from "antd";

const { Title, Text } = Typography;

type ModalOneProps = {
  selectedLibrary: LibraryDetails | null;
  handleCloseModal: () => void;
  detailsLoading: boolean;
};

function ModalOne({
  selectedLibrary,
  handleCloseModal,
  detailsLoading,
}: ModalOneProps): JSX.Element {
  return (
    <Modal
      title={
        selectedLibrary?.id
          ? `${selectedLibrary.name} [ID ${selectedLibrary.id}]`
          : "Информация"
      }
      width={"80%"}
      
      visible={!!selectedLibrary}
      onCancel={handleCloseModal}
      footer={null}
     // style={{ minWidth: "500px" }}
    >
      {detailsLoading ? (
        <Spin size="large" />
      ) : (
        <div>
          <CodeHighlighter
            code={
              selectedLibrary?.install_command
                ? selectedLibrary?.install_command
                : "No command found"
            }
            language="bash"
            title="Install Command"
          />
          <Title level={5}>Описание</Title>
          <Text type="secondary">{selectedLibrary?.description}</Text>
        </div>
      )}
    </Modal>
  );
}

export default ModalOne;
