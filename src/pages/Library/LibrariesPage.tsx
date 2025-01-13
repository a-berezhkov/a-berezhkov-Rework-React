import { Content } from "antd/es/layout/layout";
import LibraryList from "../../entities/library/ui/LibraryList";

function LibrariesPage(): JSX.Element {
  return (
    <div>
      <Content style={{ marginTop: 64, padding: "20px 50px" }}>
        <LibraryList />
      </Content>
    </div>
  );
}

export default LibrariesPage;
