import { notification } from "antd";

export const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export const getUrlLastId = (value) => {
  const array = value.split("/");
  return array[array.length - 1];
};

export function yyyymmddFormate(date) {
  let dateNew = new Date(date);
  let dd = dateNew.getDate();
  let mm = dateNew.getMonth() + 1;
  let yyyy = dateNew.getFullYear();
  return `${dd < 10 ? `0${dd}` : dd}/${mm < 10 ? `0${mm}` : mm}/${yyyy}`;
}
