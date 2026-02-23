// servicesData.ts
import checkIcon from '../../assets/check-icon.svg';
import waterIcon from '../../assets/water-icon.svg';
import dryIcon from '../../assets/dry-icon.svg';
import toolIcon from '../../assets/tool-icon.svg';
import toolsIcon from '../../assets/tools-icon.svg';
import shieldIcon from '../../assets/shield-icon.svg';
import homeIcon from '../../assets/home-icon.svg';
import cleanIcon from '../../assets/clean-icon.svg';

export const servicesData = [
  {
    title: 'Демонтаж и обратный монтаж из профиля EuroKRAAB',
    descriptionList: [
      {
        icon: { iconSrc: checkIcon, alt: 'Демонтаж с сохранением полотна' },
        text: 'Демонтаж с сохранением полотна',
      },
      {
        icon: { iconSrc: checkIcon, alt: 'Сохраняем стены и материал' },
        text: 'Сохраняем стены и материал',
      },
    ],
  },
  {
    title: 'Слив воды',
    descriptionList: [
      {
        icon: { iconSrc: waterIcon, alt: 'После затопления сливаем воду' },
        text: 'После затопления сливаем воду',
      },
      {
        icon: { iconSrc: dryIcon, alt: 'Просушиваем' },
        text: 'Просушиваем',
      },
      {
        icon: { iconSrc: toolIcon, alt: 'Восстанавливаем геометрию потолка' },
        text: 'Восстанавливаем геометрию потолка',
      },
    ],
  },
  {
    title: 'Устранение порезов',
    descriptionList: [
      {
        icon: { iconSrc: toolsIcon, alt: 'Устраняем локальные повреждения' },
        text: 'Устраняем локальные повреждения',
      },
      {
        icon: { iconSrc: shieldIcon, alt: 'Без заплаток' },
        text: 'Без заплаток',
      },
    ],
  },
  {
    title: 'Монтаж скрытой гардины',
    descriptionList: [
      {
        icon: { iconSrc: homeIcon, alt: 'Устанавливаем скрытую гардину' },
        text: 'Устанавливаем скрытую гардину в уже готовый потолок',
      },
      {
        icon: { iconSrc: cleanIcon, alt: 'Без полного демонтажа' },
        text: 'Без полного демонтажа и лишней пыли',
      },
    ],
  },
];
