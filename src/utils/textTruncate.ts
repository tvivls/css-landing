function textTruncate(text: string, maxLength = 80) {
  if (text.length < maxLength) {
    return text;
  }
  const lastSpaceIndex = text.lastIndexOf(' ', maxLength);

  if (lastSpaceIndex === -1) {
    return `${text.substring(0, maxLength)}...`;
  }

  return `${text.substring(0, lastSpaceIndex)}...`;
}

export default textTruncate;
