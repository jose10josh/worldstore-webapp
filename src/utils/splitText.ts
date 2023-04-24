export const splitText = (maxLength:number, text:string) => {
  if (text.length <= maxLength) {
    return [text];
  }
  return `${text.slice(0, maxLength - 10)}...`;
}