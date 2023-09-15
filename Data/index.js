import goldListData from './GOLD_LIST.json';

export const getAllGoldList = () => {
  return goldListData.goldList;
};

export const getAllGoldItem = (itemId) => {
  return goldListData.goldList.find((item) => item.id == itemId);
};
