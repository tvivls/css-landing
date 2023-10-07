interface TextTruncateProps {
  text: string;
  maxLength?: number;
}

function TextTruncate({ text, maxLength = 80 }: TextTruncateProps) {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return <div>{truncatedText}</div>;
}

export default TextTruncate;
