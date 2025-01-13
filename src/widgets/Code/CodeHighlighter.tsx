import React, { useState } from "react";
import { Card, Button, Tooltip, message } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeHighlighterProps {
  code: string; // Code to display
  language?: string; // Programming language for syntax highlighting
  title?: string; // Optional title for the card
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ code, language = "javascript", title }) => {
  const [copied, setCopied] = useState(false);

  // Function to handle copying to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      message.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    } catch (error) {
      message.error("Failed to copy code!");
    }
  };

  return (
    <Card
      title={title || "Code Example"}
      bordered
      extra={
        <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
          <Button
            type="text"
            icon={copied ? <CheckOutlined style={{ color: "green" }} /> : <CopyOutlined />}
            onClick={handleCopy}
          />
        </Tooltip>
      }
      style={{ margin: "20px", position: "relative" }}
    >
      <SyntaxHighlighter language={language} style={dracula} wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </Card>
  );
};

export default CodeHighlighter;
