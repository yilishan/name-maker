import shijing from '../assets/shijing.json';

/**
 * 获取姓名
 * @returns 
 */
export const getName = () => {
  const item = shijing[Math.floor(Math.random() * shijing.length)];
  const random_a = Math.floor(Math.random() * item.content.length);
  const random_b = Math.floor(Math.random() * item.content.length);

  return `${item.content.charAt(random_a)}${item.content.charAt(random_b)}`;
}
