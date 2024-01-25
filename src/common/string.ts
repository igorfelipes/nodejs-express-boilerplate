export const removeAcents = (text: string) => {
	const accentsRegex = /[\u0300-\u036f]/g; 
  const normalizedText = text.normalize('NFD').replace(accentsRegex, ''); 
  return normalizedText;
}
