export const storage = {
  theme: 'tables-app-theme',
  tableData: 'tables-app-tableData',
  tableFilters: 'tables-app-tableFilters'
};

export const storageGetItem = (storageItem: string) => {
  try {
    const response = localStorage.getItem(storageItem);
    if (response) {
      return JSON.parse(response);
    }
  } catch (error) {
    console.log(error);
  }
};

export const storageSetItem = (storageItem: string, value: unknown) => {
  try {
    localStorage.setItem(storageItem, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
