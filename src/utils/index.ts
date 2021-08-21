export async function dataFetcher(params: any) {
  try {
    const response = await fetch(params);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Fetcher error: ' + error);
    return {};
  }
}

export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat('us-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(number);
};
