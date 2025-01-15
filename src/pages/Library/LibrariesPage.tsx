import { Content } from "antd/es/layout/layout";
import LibraryList from "../../entities/library/ui/LibraryList";
import { Typography } from "antd";
const { Title } = Typography;

function LibrariesPage(): JSX.Element {
  return (
    <div>
      <Content style={{ marginTop: 64, padding: "20px 50px" }}>
        <Title>Библиотеки python </Title>
        <LibraryList />
      </Content>
    </div>
  );
}

export default LibrariesPage;
